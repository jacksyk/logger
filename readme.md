# 一款美观轻量的 log 工具

## 安装

```
npm install syk-logger
```

## 使用

```
import { borderLogger, backLogger, prettyLogger } from 'syk-logger';

borderLogger.primary("hello")
backLogger.primary("hello")
prettyLogger.danger("hello", "没有了")
```
