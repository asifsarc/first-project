export type User = {
  userId: string;
  userName: string;
  name: Name;
  email: string;
  phone: string;
  password: string;
  dathOfBirth: string;
  gender: 'male' | 'female' | 'other';
  address: Address;
  preference: Preferences;
  acountStatus: 'active' | 'inactive' | 'banned';
  roles: string[];
};

export type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type Preferences = {
  newsletter: boolean;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
};

export type Name = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
