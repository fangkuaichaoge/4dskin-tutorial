# 认识 geometry.json

geometry.json 内含有皮肤模型的数据。据我研究，geometry.json 有四种格式。geometry.json 模型格式并不严格，但是某一些 mojang 的屎山代码会导致一些令人意外的效果。

## 1 认识 geometry 文件

我的世界 4D 皮肤中 geometry.json 只接受旧版基岩模型。旧版基岩模型只能是箱型 UV 的 cube 或者是 mesh 组成。

模型内有骨骼/组 bone/group，bone 还可以包含其他 bone，bone 也可以包含有 mesh，cube 等元素。以下会把 cube/mesh 称之为元素，bone/group 称之为骨骼。

示例结构如下：

```json
{
    "name": "body",
    "parent": "waist",
    "pivot": [
        0,
        32,
        0
    ]
}
```

这个指的就是一个叫 body 的骨骼，他的父组是 waist，枢纽点在 (0,32,0)。

枢纽点是骨骼旋转的中心，它控制着这个骨骼的旋转，或者说当骨骼旋转的时候，是围绕这个点旋转的。

```json
{
    "name": "cape",
    "pivot": [
        0,
        27,
        2.5
    ],
    "rotation": [
        0,
        180,
        0
    ]
}
```

示例如下，这里指的是一个叫 cape 的骨骼，他的父组是 body，枢纽点在 (0,27,2.5)，且旋转角度为 (0,180,0)。

## 2 geometry.json 格式

在 MC 的发展中，geometry 由以下几种格式：

### 格式形式 1：不标示格式版本型

示例如下仅展示部分：

```json
{
    "geometry.模型名字": {
        "texturewidth": 128,
        "textureheight": 128,
        "bones": [
            {
                "name": "root",
                "pivot": [
                    0,
                    0,
                    0
                ]
            },
            {
                "name": "waist",
                "parent": "root",
                "pivot": [
                    0,
                    12,
                    0
                ]
            }
        ]
    }
}
```

这里开头没有标明格式，可以解析 cube，mesh 两种元素。但是，当 geometry.json 倒数第二个大括号后面有一个英文逗号 "," 的时候，cube 模型可以解析，mesh 模型则不解析。

### 格式形式 2：市场包形式

示例格式如下：

```json
{
    "geometry.模型名字": {
        "texturewidth": 64,
        "textureheight": 64,
        "visible_bounds_width": 3,
        "visible_bounds_height": 3.5,
        "visible_bounds_offset": [0, 1.25, 0],
        "bones": [
            {
                "name": "body",
                "pivot": [0, 24, 0],
                "cubes": [
                    {"origin": [-4, 12, -2], "size": [8, 12, 4], "uv": [16, 16]}
                ]
            }
            。。。。。。。。。
        "texturewidth": 64,
		"textureheight": 64,
		"META_ModelVersion": "1.0.6",
		"rigtype": "slim",
		"animationArmsDown": false,
		"animationArmsOutFront": false,
		"animationStatueOfLibertyArms": false,
		"animationSingleArmAnimation": false,
		"animationStationaryLegs": false,
		"animationSingleLegAnimation": false,
		"animationNoHeadBob": false,
		"animationDontShowArmor": false,
		"animationUpsideDown": false,
		"animationInvertedCrouch": false
	}
}
```

这里格式同 1，但是有不少可用的小巧思，但是都可以在 skins.json 里面实现，现在再用可谓是非常古老了。以后章节会专门讲这种模型的特殊应用。

分别是：
- 手臂下垂（僵尸手臂）
- 自由女神像举手造型
- 单臂独立
- 腿部固定不动
- 单腿独立
- 不动头
- 不显示盔甲
- 反向蹲伏动画

感兴趣的可以试试，这里不展开详述。

### 格式形式 3/4

geometry.json 存在 `"format_version": "1.8.0"` 或者是 `"format_version": "1.10.0"`，这里是最常见最大众的格式，可以解析 cube，mesh 两种元素。当 geometry.json 倒数第二个大括号后面有一个英文逗号 "," 的时候，cube/mesh 模型可以解析。

示例如下：

```json
{
    "format_version": "1.8.0",
    "geometry.n0": {
        "bones": [
            {
                "name": "root",
                "pivot": [
                    0,
                    0,
                    0
                ]
            },
            {
                "name": "body",
                "parent": "waist",
                "pivot": [
                    0,
                    32,
                    0
                ]
            }
        ]
    }
}
```