declare class borderBackLogger {
    back: boolean;
    constructor(back: boolean);
    primary(text: any): void;
    success(text: any): void;
    warning(text: any): void;
    danger(text: any): void;
    info(text: any): void;
    default(text: any): void;
}
declare class PrettyLogger {
    constructor();
    primary(title: string, text: string): void;
    success(title: string, text: string): void;
    warning(title: string, text: string): void;
    danger(title: string, text: string): void;
    info(title: string, text: string): void;
    default(title: string, text: string): void;
}
declare const borderLogger: borderBackLogger;
declare const backLogger: borderBackLogger;
declare const prettyLogger: PrettyLogger;
export { borderLogger, backLogger, prettyLogger };
declare const _default: {
    borderLogger: borderBackLogger;
    backLogger: borderBackLogger;
    prettyLogger: PrettyLogger;
};
export default _default;
