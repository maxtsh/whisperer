import User from "./User";

type OptionsTypes = {
  sourceURL: string;
};

class Whisperer {
  Person: User;
  options: OptionsTypes = {
    sourceURL: "https://example.com",
  };

  constructor() {
    this.Person = new User();
  }

  initialize(options: OptionsTypes) {
    this.options = options;
  }
}

export default Whisperer;
