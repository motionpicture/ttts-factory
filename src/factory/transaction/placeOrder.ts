import * as cinerino from '@cinerino/factory';
import * as GMO from '@motionpicture/gmo-service';
import * as waiter from '@waiter/factory';

import { IAction as IAuthorizeAction } from '../action/authorize';
import { IExtendId } from '../autoGenerated';
import { IOrder } from '../order';
import PaymentMethodType from '../paymentMethodType';
import { Group as PersonGroup, IContact, IPerson } from '../person';
import * as TransactionFactory from '../transaction';

/**
 * クレジットカード売上結果
 */
export type ICreditCardSales = GMO.services.credit.IAlterTranResult;

/**
 * 購入者プロフィールインターフェース
 */
export type ICustomerContact = IContact;

/**
 * 販売者インターフェース
 */
export interface ISeller {
    typeOf: cinerino.organizationType | cinerino.personType;
    id: string;
    name: string;
    url?: string;
}

/**
 * 購入者インターフェース
 */
export type IAgent = IPerson;

/**
 * 取引結果インターフェース
 */
export interface IResult {
    /**
     * 注文データ
     */
    order: IOrder;
    /**
     * GMO売上結果
     */
    creditCardSales?: ICreditCardSales;
    /**
     * 座席予約リスト
     */
    // eventReservations: EventReservationFactory.IReservation[];
    /**
     * 印刷トークン(印刷に必要な期限付きトークン)
     */
    printToken: string;
}

/**
 * エラーインターフェース
 */
export type IError = any;

/**
 * 取引対象物インターフェース
 */
export interface IObject {
    // tslint:disable-next-line:no-suspicious-comment
    /**
     * WAITER許可証トークン
     * TODO 必須プロパティに変更
     */
    passportToken?: waiter.passport.IEncodedPassport;
    // tslint:disable-next-line:no-suspicious-comment
    /**
     * WAITER許可証
     * TODO 必須プロパティに変更
     */
    passport?: waiter.passport.IPassport;
    /**
     * user object of the client where a transaction is processing.
     */
    clientUser: cinerino.clientUser.IClientUser;
    /**
     * 購入者区分
     */
    purchaser_group: PersonGroup;
    /**
     * customer contact
     */
    customerContact?: ICustomerContact;
    /**
     * 認可アクションリスト
     */
    authorizeActions: IAuthorizeAction[];
    /**
     * 決済方法
     */
    paymentMethod?: PaymentMethodType;
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * 注文取引インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes {
    /**
     * 購入者
     */
    agent: IAgent;
    /**
     * 販売者
     */
    seller: ISeller;
    /**
     * 取引の結果発生するもの
     */
    result?: IResult;
    /**
     * 取引に関するエラー
     */
    error?: IError;
    /**
     * 取引の対象物
     * 座席仮予約、クレジットカードのオーソリなど、取引を構成する承認などが含まれます。
     */
    object: IObject;
}

export type ISearchConditions = cinerino.transaction.ISearchConditions<cinerino.transactionType.PlaceOrder>;
