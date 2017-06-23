import { MiddlewaresConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersModule } from "../users/users.module";
import { AuthMiddleware } from './../../core/shared/auth.middleware';
import { SharedModule } from './../../core/shared/shared.module';
import { OrganizationsController } from "./organizations.controller";
import { OrganizationsService } from "./organizations.service";

@Module({
  components: [OrganizationsService],
  controllers: [OrganizationsController],
  exports: [],
  modules: [SharedModule, UsersModule],
})
export class OrganizationsModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({
        path: 'organizations',
        method: RequestMethod.GET
      });
  }
}
