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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
require("rxjs/add/observable/forkJoin");
var OrganizationsService = (function () {
    function OrganizationsService(http) {
        this.http = http;
        this.url = 'organizations';
    }
    OrganizationsService.prototype.getAll = function () {
        return this.http
            .get(this.url);
    };
    OrganizationsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], OrganizationsService);
    return OrganizationsService;
}());
exports.OrganizationsService = OrganizationsService;
//# sourceMappingURL=organizations.service.js.map