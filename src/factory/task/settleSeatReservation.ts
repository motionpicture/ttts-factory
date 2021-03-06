import { taskStatus } from '@cinerino/factory';

import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import * as TaskExecutionResult from '../taskExecutionResult';
import TaskName from '../taskName';

export interface IData {
    transactionId: string;
}

export interface IAttributes extends TaskFactory.IAttributes {
    data: IData;
}

export type ITask = IExtendId<IAttributes>;

export function createAttributes(params: {
    status: taskStatus;
    runsAt: Date;
    remainingNumberOfTries: number;
    lastTriedAt: Date | null;
    numberOfTried: number;
    executionResults: TaskExecutionResult.ITaskExecutionResult[];
    data: IData;
}): IAttributes {
    return TaskFactory.createAttributes({ ...params, ...{ name: TaskName.SettleSeatReservation } });
}
