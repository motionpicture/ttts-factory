import { actionType } from '@cinerino/factory';

import * as ActionFactory from '../../action';
import { IExtendId } from '../../autoGenerated';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = any;
export type IResult = any;

export interface IAttributes extends ActionFactory.IAttributes {
    result?: IResult;
    object: IObject;
}

export type IAction = IExtendId<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionFactory.ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    startDate: Date;
    endDate?: Date;
}): IAttributes {
    return {
        actionStatus: params.actionStatus,
        typeOf: actionType.PrintAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        startDate: params.startDate,
        endDate: params.endDate
    };
}
