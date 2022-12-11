function Logger(logString: string) {
  console.log("LOGGER FACTORY ");
  return function (
    constructor: Function // Function型は、コンストラクタ関数を表す
  ) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("テンプレートファクトリ");
  return function (constructor: any) {
    console.log("テンプレートを表示");
    const hookEl = document.getElementById(hookId);

    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("ログ出力中")
@WithTemplate("<h1>Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Personオブジェクトを作成中");
  }
}

const pers = new Person();

console.log(pers);
