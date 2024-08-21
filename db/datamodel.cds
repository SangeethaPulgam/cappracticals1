namespace ust.sangeetha.pulgam.db;
using { cuid, managed, temporal, Currency } from '@sap/cds/common';
using {ust.sangeetha.pulgam.common} from './common';


context master {
    entity employees: cuid {
        nameFirst: String(40);
        nameMiddle: String(40);
        nameLast: String(40);
        nameInitials: String(40);
        Gender: common.Gender;
        Language: String(1);
        phoneNumber: common.PhoneNumber;
        Email: common.Email;
        loginName: String(12);
        Currency: Currency;
        salaryAmount: common.AmountT;
        accountNumber: String(16);
        bankId: String(40);
        bankName: String(64);
    }
    
}