/**
 * factory
 */
import * as cinerino from '@cinerino/factory';
import * as chevre from './chevre';

import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as CreditCardAuthorizeActionFactory from './factory/action/authorize/creditCard';
import * as seatReservationAuthorizeActionFactory from './factory/action/authorize/seatReservation';
import * as PrintActionFactory from './factory/action/transfer/print';
import * as PrintTicketActionFactory from './factory/action/transfer/print/ticket';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import * as MultilingualStringFactory from './factory/multilingualString';
import * as SeatReservationOfferFactory from './factory/offer/seatReservation';
import * as OrderFactory from './factory/order';
import * as CorporationOrganizationFactory from './factory/organization/corporation';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import PaymentMethodType from './factory/paymentMethodType';
import * as PerformanceFactory from './factory/performance';
import * as PersonFactory from './factory/person';
import * as CheckinGateFactory from './factory/place/checkinGate';
import * as MovieTheaterFactory from './factory/place/movieTheater';
import * as EventReservationFactory from './factory/reservation/event';
import * as TaskFactory from './factory/task';
import * as AggregateEventReservationsTaskFactory from './factory/task/aggregateEventReservations';
import * as CancelCreditCardTaskFactory from './factory/task/cancelCreditCard';
import * as CancelSeatReservationTaskFactory from './factory/task/cancelSeatReservation';
import * as CreateOrderTaskFactory from './factory/task/createOrder';
import * as CreatePlaceOrderReportTaskFactory from './factory/task/createPlaceOrderReport';
import * as CreateReturnOrderReportTaskFactory from './factory/task/createReturnOrderReport';
import * as ReturnOrderTaskFactory from './factory/task/returnOrder';
import * as ReturnOrdersByPerformanceTaskFactory from './factory/task/returnOrdersByPerformance';
import * as SendEmailNotificationTaskFactory from './factory/task/sendEmailNotification';
import * as SettleCreditCardTaskFactory from './factory/task/settleCreditCard';
import * as SettleSeatReservationTaskFactory from './factory/task/settleSeatReservation';
import * as TriggerWebhookTaskFactory from './factory/task/triggerWebhook';
import * as UpdateOrderReportByReservationTaskFactory from './factory/task/updateOrderReportByReservation';
import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TicketTypeCategory from './factory/ticketTypeCategory';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as ReturnOrderTransactionFactory from './factory/transaction/returnOrder';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import cinerino = cinerino;
export import chevre = chevre;
export import errors = errors;
export import errorCode = ErrorCode;

export import actionStatusType = cinerino.actionStatusType;
export import actionType = cinerino.actionType;
export namespace action {
    export import IParticipant = ActionFactory.IParticipant;
    export namespace authorize {
        export import IAction = AuthorizeActionFactory.IAction;
        export import IAttributes = AuthorizeActionFactory.IAttributes;
        export import authorizeActionPurpose = AuthorizeActionFactory.AuthorizeActionPurpose;
        export import creditCard = CreditCardAuthorizeActionFactory;
        export import seatReservation = seatReservationAuthorizeActionFactory;
    }
    export namespace transfer {
        export namespace print {
            export import IAction = PrintActionFactory.IAction;
            export import IAttributes = PrintActionFactory.IAttributes;
            export import IRecipient = PrintActionFactory.IRecipient;
            export import ticket = PrintTicketActionFactory;
        }
    }
}
export import clientUser = cinerino.clientUser;
export namespace paymentMethod {
    export namespace paymentCard {
        export import creditCard = CreditCardFactory;
    }
}
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
}
export import creativeWorkType = cinerino.creativeWorkType;
export import itemAvailability = chevre.itemAvailability;

export import monetaryAmount = cinerino.monetaryAmount;
export import multilingualString = MultilingualStringFactory;
export namespace offer {
    export import seatReservation = SeatReservationOfferFactory;
}
export import order = OrderFactory;
export import orderStatus = cinerino.orderStatus;
export namespace organization {
    export import corporation = CorporationOrganizationFactory;
}
export import organizationType = cinerino.organizationType;
export import priceCurrency = cinerino.priceCurrency;
export import paymentMethodType = PaymentMethodType;
export import performance = PerformanceFactory;
export import person = PersonFactory;
export import personType = cinerino.personType;
export import project = cinerino.project;
export import propertyValue = cinerino.propertyValue;
export namespace reservation {
    export import event = EventReservationFactory;
}
export import reservationType = chevre.reservationType;
export import sortType = cinerino.sortType;
export namespace place {
    export import checkinGate = CheckinGateFactory;
    export import movieTheater = MovieTheaterFactory;
}
export import reservationStatusType = chevre.reservationStatusType;
export namespace task {
    export import IAttributes = TaskFactory.IAttributes;
    export import ITask = TaskFactory.ITask;
    export import aggregateEventReservations = AggregateEventReservationsTaskFactory;
    export import cancelCreditCard = CancelCreditCardTaskFactory;
    export import cancelSeatReservation = CancelSeatReservationTaskFactory;
    export import createOrder = CreateOrderTaskFactory;
    export import createPlaceOrderReport = CreatePlaceOrderReportTaskFactory;
    export import createReturnOrderReport = CreateReturnOrderReportTaskFactory;
    export import returnOrder = ReturnOrderTaskFactory;
    export import returnOrdersByPerformance = ReturnOrdersByPerformanceTaskFactory;
    export import sendEmailNotification = SendEmailNotificationTaskFactory;
    export import settleCreditCard = SettleCreditCardTaskFactory;
    export import settleSeatReservation = SettleSeatReservationTaskFactory;
    export import triggerWebhook = TriggerWebhookTaskFactory;
    export import updateOrderReportByReservation = UpdateOrderReportByReservationTaskFactory;
}
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = cinerino.taskStatus;
export import ticketTypeCategory = TicketTypeCategory;
export namespace transaction {
    export type ISearchConditions<T extends cinerino.transactionType> =
        T extends cinerino.transactionType.PlaceOrder ? PlaceOrderTransactionFactory.ISearchConditions :
        T extends cinerino.transactionType.ReturnOrder ? ReturnOrderTransactionFactory.ISearchConditions :
        never;
    export type IAttributes<T extends cinerino.transactionType> =
        T extends cinerino.transactionType.PlaceOrder ? PlaceOrderTransactionFactory.IAttributes :
        T extends cinerino.transactionType.ReturnOrder ? ReturnOrderTransactionFactory.IAttributes :
        never;
    export type ITransaction<T extends cinerino.transactionType> =
        T extends cinerino.transactionType.PlaceOrder ? PlaceOrderTransactionFactory.ITransaction :
        T extends cinerino.transactionType.ReturnOrder ? ReturnOrderTransactionFactory.ITransaction :
        never;
    export import placeOrder = PlaceOrderTransactionFactory;
    export import returnOrder = ReturnOrderTransactionFactory;
}
export import transactionStatusType = cinerino.transactionStatusType;
export import transactionTasksExportationStatus = cinerino.transactionTasksExportationStatus;
export import transactionType = cinerino.transactionType;
