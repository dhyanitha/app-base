"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("environments/environment");
var MainNavComponent = (function () {
    function MainNavComponent() {
        this.user = null;
        this.title = environment_1.environment.appTitle;
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MainNavComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MainNavComponent.prototype, "menuLinks", void 0);
    MainNavComponent = __decorate([
        core_1.Component({
            selector: 'ab-main-nav',
            templateUrl: './main-nav.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MainNavComponent);
    return MainNavComponent;
}());
exports.MainNavComponent = MainNavComponent;
//# sourceMappingURL=main-nav.component.js.map