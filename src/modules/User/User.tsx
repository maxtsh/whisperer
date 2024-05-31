import { getUserCookie, setUserCookie } from "@/utils/cookies";

class User {
  constructor() {
    this.initialize(getUserCookie());
  }

  initialize(userId?: string) {
    if (!userId) {
      const user = {
        id: crypto.randomUUID(),
        name: "anonymous",
      };

      setUserCookie(JSON.stringify(user));
    }
  }
}

export default User;
