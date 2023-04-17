import { _decorator, Component, Node, native, Label } from "cc";

const { ccclass, property } = _decorator;
@ccclass("DemoScript")
export default class DemoScript extends Component {
  @property({ type: Label })
  resultNode: Label;
  static functionToBeCalledFromIos: Function;
  start() {}

  CallingXCodeFunctionFromCocos() {
    let result = native.reflection.callStaticMethod(
      "AppDelegate",
      "addTwoNumber:and:",
      "23",
      "44"
    );
    console.log("THIS IS RESULT: ", result);
    this.resultNode.string = result;
  }
  functionToBeCalledFromIos = (result: number) => {
    console.log("CALLED FROM IOS");
    let newresult: number = result + 20;
    console.log("This is New Result", newresult);
  };
  update(deltaTime: number) {}
}
