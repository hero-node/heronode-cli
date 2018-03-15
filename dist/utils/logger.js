"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const _ = require("lodash");
const moment = require("moment");
class LoggerFactory {
    static getLabeledInstance(category, callee) {
        if (!category || _.isEmpty(category))
            category = 'default';
        if (!callee || _.isEmpty(callee))
            callee = 'default';
        const identity = `${category}-${callee}`;
        let labeledInstance = this._instances.get(identity);
        if (!labeledInstance) {
            const { printf } = winston_1.format;
            labeledInstance = winston_1.createLogger({
                label: callee,
                format: printf(info => {
                    return `${moment().format('YYYY-MM-DD hh:mm:ss.SSS')} ${_.padEnd(info.level, 7)} --- [${category}] ${callee}: ${info.message}`;
                }),
                transports: [new winston_1.transports.Console()],
            });
            this._instances.set(identity, labeledInstance);
        }
        return labeledInstance;
    }
}
LoggerFactory._instances = new Map();
exports.LoggerFactory = LoggerFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIiwic291cmNlcyI6WyJ1dGlscy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBMkQ7QUFDM0QsNEJBQTRCO0FBQzVCLGlDQUFpQztBQTBCakM7SUFHRSxNQUFNLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE1BQU07UUFDeEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDckQsTUFBTSxRQUFRLEdBQUcsR0FBRyxRQUFRLElBQUksTUFBTSxFQUFFLENBQUM7UUFDekMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxnQkFBTSxDQUFDO1lBQzFCLGVBQWUsR0FBRyxzQkFBWSxDQUFDO2dCQUM3QixLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNwQixNQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUM5RCxJQUFJLENBQUMsS0FBSyxFQUNWLENBQUMsQ0FDRixTQUFTLFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuRCxDQUFDLENBQUM7Z0JBQ0YsVUFBVSxFQUFFLENBQUMsSUFBSSxvQkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUN6QixDQUFDOztBQXRCTSx3QkFBVSxHQUFHLElBQUksR0FBRyxFQUFrQyxDQUFDO0FBRGhFLHNDQXdCQyJ9