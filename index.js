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
const prisma = new client_1.PrismaClient({
    log: ['query', 'info', 'warn', 'error']
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const companyMember = yield prisma.company.create({
            data: {
                name: 'Arjun',
                managers: {
                    create: [
                        {
                            name: "Random name"
                        },
                        {
                            name: "Lil Uzi Vert"
                        }
                    ]
                },
                employees: {
                    create: [
                        {
                            name: "Future"
                        }
                    ]
                }
            },
            select: {
                name: true,
                managers: {
                    select: {
                        name: true
                    }
                },
                employees: {
                    select: {
                        name: true
                    }
                }
            }
        });
        console.log(companyMember);
    });
}
main();
