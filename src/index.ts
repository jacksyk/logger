/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | info ]
 */
function typeColor(type = "default") {
    let color = ""
    switch (type) {
        case "primary":
            color = "#2d8cf0"
            break
        case "success":
            color = "#19be6b"
            break
        case "info":
            color = "#909399"
            break
        case "warning":
            color = "#ff9900"
            break
        case "danger":
            color = "#f03f14"
            break
        case "default":
            color = "#35495E"
            break
        default:
            color = type
            break
    }
    return color
}

/**
 * 打印方法
 * @param text 输出文本
 * @param type 输出样式，可以是6个状态值，也可以是自定义颜色
 * @param back 是否将色值应用于背景色
 */
function print(text: any, type = "default", back = false) {
    if (typeof text === "object") {
        // 如果是对象则调用打印对象方式
        console.dir(text)
        return
    }
    if (back) {
        // 如果是打印带背景图的
        console.log(`%c ${text} `, `background:${typeColor(type)}; padding: 2px; border-radius: 4px;color: #fff;`)
    } else {
        console.log(`%c ${text} `, `color: ${typeColor(type)};`)
    }
}

function pretty(title: any, text: any, type = "primary") {
    console.log(
        `%c ${title} %c ${text} %c`,
        `background:${typeColor(type)};border:1px solid ${typeColor(
            type
        )}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
        `border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${typeColor(type)};`,
        "background:transparent"
    )
}

class borderBackLogger {
    back: boolean
    constructor(back: boolean) {
        this.back = back
    }
    primary(text: any) {
        print(text, "primary", this.back)
    }
    success(text: any) {
        print(text, "success", this.back)
    }
    warning(text: any) {
        print(text, "warning", this.back)
    }
    danger(text: any) {
        print(text, "danger", this.back)
    }
    info(text: any) {
        print(text, "info", this.back)
    }
    default(text: any) {
        print(text, "default", this.back)
    }
}

class PrettyLogger {
    constructor() {}
    primary(title: string, text: string) {
        pretty(title, text, "primary")
    }
    success(title: string, text: string) {
        pretty(title, text, "success")
    }
    warning(title: string, text: string) {
        pretty(title, text, "warning")
    }
    danger(title: string, text: string) {
        pretty(title, text, "danger")
    }
    info(title: string, text: string) {
        pretty(title, text, "info")
    }
    default(title: string, text: string) {
        pretty(title, text, "default")
    }
}

const borderLogger = new borderBackLogger(false)
const backLogger = new borderBackLogger(true)
const prettyLogger = new PrettyLogger()

export { borderLogger, backLogger, prettyLogger }
export default {
    borderLogger,
    backLogger,
    prettyLogger,
}
