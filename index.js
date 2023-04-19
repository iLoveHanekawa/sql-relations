"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const project = yield prisma.project.create({
            data: {
                name: "Nextjs"
            }
        });
        const createProject = yield prisma.employee.create({
            data: {
                name: 'Bob',
                projects: {
                    create: [
                        {
                            project: {
                                connect: {
                                    id: 1
                                }
                            }
                        }
                    ]
                }
            }
        });
        const employee = yield prisma.employee.findUnique({
            where: {
                id: 1
            },
            include: {
                projects: {
                    include: {
                        project: true
                    }
                }
            }
        });
        console.log(employee);
    });
}
main();
