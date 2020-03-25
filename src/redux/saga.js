import { takeEvery, all, put, call, takeLatest } from "redux-saga/effects";
import { updateCategories } from "../redux/actions";
import serverCall from "../utilsFolder/utils";
import { Routes } from "../config";

const { AllCategory, Upload_Category } = Routes;

export const all_categories = () => {
  return {
    type: "all_category"
  };
};

export const updatecategories = data => {
  console.log("data", data);
  return {
    type: "update_category",
    payload: data
  };
};

function* allcategories() {
  let data = yield call(() => {
    return serverCall(AllCategory).then(res => {
      if (res) {
        return res.data?.dataFromDatabase?.map(category => {
          return category;
        });
      }
    });
  });
  yield put(updateCategories(data));
}

function* result(data) {
  console.log("category", data);
  const categoryToBeUploaded = { category: data.payload };
  let updatedData = yield call(() => {
    return serverCall(Upload_Category, categoryToBeUploaded).then(res => {
      return res?.data?.dataFromDatabase?.map(data => {
        return data;
      });
    });
  });
  console.log("----------in end-------------");
  yield put(updateCategories(updatedData));
}

function* generatorFunction() {
  yield takeLatest("all_category", allcategories);
  console.log("payload", updatecategories.payload);
  yield takeEvery(
    "update_category",
    result
    // function*({ payload }) {
    //   console.log("-----", payload);
    //   let result1 = result(payload);
    //   result1.next();
    // }
  );
}

export default generatorFunction;
