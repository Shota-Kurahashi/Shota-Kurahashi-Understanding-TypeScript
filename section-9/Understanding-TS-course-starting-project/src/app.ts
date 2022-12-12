/* validation */
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValidate = true;

  if (validatableInput.required) {
    isValidate =
      isValidate && validatableInput.value.toString().trim().length !== 0;
  }

  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValidate =
      isValidate &&
      validatableInput.value.toString().length > validatableInput.minLength;
  }

  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValidate =
      isValidate &&
      validatableInput.value.toString().length <= validatableInput.maxLength;
  }

  if (validatableInput.min && typeof validatableInput.value === "number") {
    isValidate = isValidate && validatableInput.value >= validatableInput.min;
  }

  if (validatableInput.max && typeof validatableInput.value === "number") {
    isValidate = isValidate && validatableInput.value <= validatableInput.max;
  }

  return isValidate;
}

/* AutoBind */
function AutoBind(
  target: any,
  propertyName: string,
  description: PropertyDescriptor
) {
  const propertyMethod = description.value;

  const adjDescriptor: PropertyDescriptor = {
    get() {
      const boundFn = propertyMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}

// ルストの中のプロジェクトを表すクラス

// リストを表示するクラス

class ProjectList {}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.querySelector("#project-input")!;
    this.hostElement = document.querySelector("#app")!;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild! as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;

    this.descriptionInputElement = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;

    this.mandayInputElement = this.element.querySelector(
      "#manday"
    )! as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private clearInput() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.mandayInputElement.value = "";
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredManday = this.mandayInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const mandayValidatable: Validatable = {
      value: +enteredManday,
      required: true,
      min: 1,
      max: 1000,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(mandayValidatable)
    ) {
      alert("入力が正しくありません。もう一度やり直してください。");
      return;
    } else {
      return [enteredTitle, enteredDescription, parseFloat(enteredManday)];
    }
  }

  @AutoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, desc, manday] = userInput;
      this.clearInput();
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
