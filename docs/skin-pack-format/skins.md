# 认识 skins.json

skins.json 的基础格式如下：

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

其中你可以在里面加入其他键值添加额外的功能。

## 额外键值说明

### cape

```json
"cape": "贴图文件名字"
```

这个是披风，用于给皮肤添加披风的。

### animations

```json
"animations": {
    "玩家动画名": "替换动画名"
}
```

### enable_attachables

```json
"enable_attachables": false
```

检测是否开启显示附着物的，这里指的是隐藏附着物，如盔甲之类的附着物。

### hide_armor

```json
"hide_armor": true
```

隐藏盔甲，启用后隐藏玩家盔甲。

### held_item_ignores_lighting

```json
"held_item_ignores_lighting": true
```

检测是否开启忽略物品光照的，这个是 ida pro 逆向 libminecraftpe.so 发现的，具体功能及效果不详。