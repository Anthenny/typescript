import { object, string, TypeOf } from 'zod';

export const createUserschema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string'
    }),
    password: string({
      required_error: 'password is required'
    }).min(6, 'Password too short - should be 6 chars minimum'),
    confirmPassword: string({
      required_error: 'Confirm password is required'
    }),
    email: string({
      required_error: 'Email is required'
    }).email('Not a valid email')
  }).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation']
  })
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserschema>,
  'body.confirmPassword'
>;
