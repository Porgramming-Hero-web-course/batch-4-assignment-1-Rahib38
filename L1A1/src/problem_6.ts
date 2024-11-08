{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
  }
  //   const sir: Profile = { name: "persian", age: 26, email: "x@gmail.com" };
  //   const updatedProfile = updateProfile(sir, { email: "xy@gmail.com" });
  //   console.log(updatedProfile);
}
