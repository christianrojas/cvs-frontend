import React from 'react';

import { SimpleForm, EditProps, Create, TextInput } from 'react-admin';

export const UserCreate: React.FC<EditProps> = () => {
  return (
    <Create title="Create Admin" redirect={false}>
      <SimpleForm>
        <TextInput label="Name" source="name" fullWidth required />
        <TextInput label="Email" source="email" fullWidth required />
        <TextInput label="Username" source="username" fullWidth required />
      </SimpleForm>
    </Create>
  );
};
