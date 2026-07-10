# 创建一个皮肤包

## 4D 皮肤包基础结构

一个完整的 4D 皮肤包包含以下文件：

- `manifest.json`：皮肤包的元数据文件
- `skins.json`：皮肤列表配置文件
- `geometry.json`：自定义模型文件
- 图片文件若干：皮肤贴图

## 1. 创建 manifest.json

`manifest.json` 是皮肤包的基础配置文件，包含版本信息和 UUID。

### 基础结构

```json
{
    "format_version": 2,
    "header": {
        "name": "Custom Skin Pack",
        "uuid": "第一个uuid",
        "version": [1, 0, 0]
    },
    "modules": [
        {
            "type": "skin_pack",
            "uuid": "第二个uuid",
            "version": [1, 0, 0]
        }
    ]
}
```

### 字段说明

| 字段                | 说明                     |
| ----------------- | ---------------------- |
| `format_version`  | 格式版本                   |
| `header.name`     | 皮肤包名称                  |
| `header.uuid`     | 第一个 UUID，用于标识皮肤包       |
| `header.version`  | 版本号                    |
| `modules.type`    | 模块类型，固定为 `"skin_pack"` |
| `modules.uuid`    | 第二个 UUID，用于标识模块        |
| `modules.version` | 模块版本号                  |

### UUID 生成

UUID 可以使用在线 UUID 生成器生成，将生成的两个 UUID 替换到 `manifest.json` 中即可。

推荐工具：[UUID Generator](https://www.uuidgenerator.net/)

## 2. 创建 skins.json

`skins.json` 用于配置皮肤列表，指定每个皮肤使用的模型和贴图。

### 基础结构（单个皮肤）

```json
{
    "skins": [
        {
            "localization_name": "名字",
            "geometry": "geometry.模型名字",
            "texture": "贴图文件名字.png",
            "type": "free"
        }
    ],
    "serialize_name": "名字",
    "localization_name": "名字"
}
```

### 基础结构（多个皮肤）

```json
{
    "skins": [
        {
            "localization_name": "名字1",
            "geometry": "geometry.模型名字1",
            "texture": "贴图名字1.png",
            "type": "free"
        },
        {
            "localization_name": "名字2",
            "geometry": "geometry.模型名字2",
            "texture": "贴图名字2.png",
            "type": "free"
        }
    ],
    "serialize_name": "Custom Skins",
    "localization_name": "Custom Skins"
}
```

### 字段说明

| 字段                          | 说明                      | 必填 |
| --------------------------- | ----------------------- | -- |
| `skins[].localization_name` | 皮肤显示名称                  | ✅  |
| `skins[].geometry`          | 模型名称，格式为 `geometry.模型名` | ✅  |
| `skins[].texture`           | 贴图文件名                   | ✅  |
| `skins[].type`              | 皮肤类型，`"free"` 表示免费      | ✅  |
| `serialize_name`            | 序列化名称                   | ✅  |
| `localization_name`         | 皮肤包显示名称                 | ✅  |

### 重要提示

> ⚠️ **注意**: `"type": "free"` 是必填项，如果省略或填写其他值，皮肤将会被锁定，无法使用。

## 3. 创建 geometry.json

`geometry.json` 是自定义模型文件，将在后续章节详细介绍。

## 4. 添加贴图文件

将你的皮肤贴图图片放入皮肤包目录中，确保文件名与 `skins.json` 中配置的一致。

贴图文件分辨率必须在 128x128 或者是 64x64，否则无法正常显示。