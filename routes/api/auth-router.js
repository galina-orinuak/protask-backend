import express from 'express';

import { authPath } from '../../const/index.js';
import authController from '../../controllers/auth-controller.js';
import { authenticate, isEmptyBody } from '../../middlewares/index.js';
import { validateBody } from '../../decorators/index.js';
import {
  userSignupSchema,
  userSigninSchema,
  userUpdateSchema,
} from '../../models/User.js';

// ============================================================

const authRouter = express.Router();

authRouter.post(
  authPath.SIGN_UP,
  validateBody(userSignupSchema),
  authController.signup
);

authRouter.post(
  authPath.SIGN_IN,
  validateBody(userSigninSchema),
  authController.signin
);

authRouter.get(authPath.CURRENT, authenticate, authController.getCurrent);

authRouter.post(authPath.SIGNOUT, authenticate, authController.signout);

authRouter.patch(
  authPath.BASE,
  authenticate,
  isEmptyBody,
  validateBody(userUpdateSchema),
  authController.updateUser
);

export default authRouter;
