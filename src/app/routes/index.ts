import express from 'express';
import { UserRoutes } from '../modules/user/users.routes';
import { UserAuth } from '../modules/auth/auth.route';
import { ProductRoutes } from '../modules/product/product.routes';
import { PaymentRoutes } from '../modules/payment/payment.routes';
import { ServiceRoutes } from '../modules/service/service.routes';



const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: UserAuth,
  },
  {
    path: '/product',
    route: ProductRoutes,
  },
  {
    path: '/payment',
    route: PaymentRoutes,
  },
  {
    path: '/service',
    route: ServiceRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
