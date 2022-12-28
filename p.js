
const {res_decode} = require("./douyin")

let v = "CAsQgabk5b3VjfQsGLhFIAgqFQoNY29tcHJlc3NfdHlwZRIEZ3ppcCriAgoPaW0taW50ZXJuYWxfZXh0Es4CaW50ZXJuYWxfc3JjOnB1c2hzZXJ2ZXJ8d3NzX3B1c2hfcm9vbV9pZDo3MTgyMDYyMjYwNDMxNDQwNjk5fHdzc19wdXNoX2RpZDo3MTgyMDc2NjIwMDMwMjgxMjE2fHdzc19wdXNoX2xvZ19pZDozMjM1ODk2NDQ0MDM2MTI1NDQxfHdzc19mZXRjaF9tczoxNjcyMjA3NTQ1MTUzfHdzc19wdXNoX21zOjE2NzIyMDc1NDUzMDl8d3NzX21zZ190eXBlOnJ8d3Jkc19rdnM6QXVkaWVuY2VHaWZ0U3luY0RhdGEtMTY3MjIwNzU0MTYzNzgzNjA5OV9XZWJjYXN0Um9vbVJhbmtNZXNzYWdlLTE2NzIyMDc1NDA3MDY4MDY3OTFfV2ViY2FzdFJvb21TdGF0c01lc3NhZ2UtMTY3MjIwNzU0MDY2MDgwMjQzMipECglpbS1jdXJzb3ISN3QtMTY3MjIwNzU0NTMwOV9yLTcxODIwNzY3MTc4OTk0NjkyNjJfZC0xX3UtMV9oLTFfcmRjLTIqFwoGaW0tbm93Eg0xNjcyMjA3NTQ1MzA5KhkKDmltLWxpdmVfY3Vyc29yEgdkLTFfdS0xMgJwYjoDbXNnQvEGH4sIAAAAAAAA/8RUT2gcVRjPJNskDIWGPciS01Jvhdl9/+bNzILoJoUmm01Lu4nGUn28nXm7O7s7O+PM253dUgqKHkINeFFQKGgFW6tFLYg1UtAe6zniRU+t2fQgEkGvspvULTUHPUiPH7/f/L7f75v3feoPU2ryBVG2eSTna1wuiyjiVZH8ckpFBwEzX1376bedt//cslPfvPPGzzd2f9+ygbJ2d1f5Vnk3mXx9cvrVnduXfx2fuffHpxuJ2UMxj/2LaaVwXu3WpAyiXDYbIJpx/HbPbQWunbF9L8tj4YksBKALAdirNN7hkodZ6Uea3dJcDZgQMwqwzst62QQAEBs7FjVFpWxDjKHOdR1n6oGoPlsJfe8ZDKhBDYgxua501ZVB80FvrMV7mR6z4HrV7D6SbUciZNWQO4I1RUc0WUdnMBO0qhdl0OxofrmecT1eFamZdBooc7Mp5ehT/Y0P+9fXt2+sb29ehdubV+9furT9yfs3lUPTDyZmrE3lOwUo7ynn/k8jV5SX1NWH8vRfyA8HzQLe2++BugwycpD+4fRhoNxRVHX66KSamB5Ljr02PnZzXIUQQIMAC4DdcWO5ROJiPT+Xz+fzcVTPh0vVF+lpm/SK3vGVk8WCV1p0VqUBFuelU1lDtbz9Sq/eXv18YuLBxBP7Q28llCuJvVd6N3FiL8KpVefk2ZXgVI+Ulgtat07mGA0q/CySxfkGZkuV87XweW+hwRtr88IhptEtLq2UnM7iAuiUZEHYs0fur2/sfPxF//ZH925t9D94s/Cyek49/V8TNnlZNFlLxMyucXlAvGNTT+uIAGx0b3392eXJawpK/b2eyUWpQWogBAyd6FAnLNQMaCIw2ArDtCxCLUQRczTI2hpktYcotJCBLYBNBC0WOraGUv2p9J1fftzcAse+H3dbUoQt3mRRaOeCdlSLRNgR4YU4itigZKHve8x1ckM5ihAFBENCALWsEclxnRxGFoAUGwYmhFITjNCmX2VDAtZNixJCAKYQEQDRkFMR0q4xL8o9mg+PPn8MIUPEi6pM9gKRCy/EoROxRifK5duOK1q2OOFWZKnXso9zyUdDG3gzMQWWxfbv4Bnf987wVmP/Fo6owADUBNSw4KPUkuQy+ieXUmACRDB67siC8hcAAAD//wEAAP//AmPFSoAFAAA="
// v = "Q2hpbmElRUYlQkMlOEMlRTQlQjglQUQlRTUlOUIlQkQ="

/*
[
    {
        "init_value":{
            "messagesList":[
                {
                    "method":"WebcastChatMessage",
                    "payload":"",
                    "msgId":"7182076673307137079",
                    "msgType":0,
                    "offset":"0"
                }
            ],
            "cursor":"t-1672207545154_r-7182076717899469262_d-1_u-1_h-7182076192739038219_rdc-2",
            "fetchInterval":"1000",
            "now":"1672207545154",
            "internalExt":"internal_src:pushserver|wss_push_room_id:7182062260431440699|wss_push_did:3290163773446680|wss_push_log_id:3235896444036124012|wss_fetch_ms:1672207545153|wss_push_ms:1672207545154|wss_msg_type:r|wrds_kvs:AudienceGiftSyncData-1672207541637836099_WebcastRoomRankMessage-1672207540706806791_WebcastRoomStatsMessage-1672207540660802432",
            "fetchType":0,
            "routeParamsMap":[

            ],
            "heartbeatDuration":"15",
            "needAck":true,
            "pushServer":"",
            "liveCursor":""
        }
    },
    {
        "common":{
            "method":"WebcastChatMessage",
            "msgId":"7182076673307137079",
            "roomId":"7182062260431440699",
            "createTime":"0",
            "monitor":0,
            "isShowMsg":true,
            "describe":"",
            "foldType":"0",
            "anchorFoldType":"0",
            "priorityScore":"31050",
            "logId":"",
            "msgProcessFilterK":"",
            "msgProcessFilterV":"",
            "anchorFoldTypeV2":"0",
            "processAtSeiTimeMs":"0",
            "randomDispatchMs":"0"
        },
        "user":{
            "id":"98309207169",
            "shortId":"1101740900",
            "nickname":"wawo~",
            "gender":1,
            "signature":"",
            "level":0,
            "birthday":"0",
            "telephone":"",
            "avatarThumb":{
                "urlListList":[
                    "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_6035ab5b80004c3d968efbc13315a553.jpeg?from=3067671334"
                ],
                "uri":"",
                "height":"0",
                "width":"0",
                "avgColor":"",
                "imageType":0,
                "openWebUrl":"",
                "isAnimated":false,
                "flexSettingListList":[

                ],
                "textSettingListList":[

                ]
            },
            "verified":false,
            "experience":0,
            "city":"",
            "status":0,
            "createTime":"0",
            "modifyTime":"0",
            "secret":0,
            "shareQrcodeUri":"",
            "incomeSharePercent":0,
            "badgeImageListList":[
                {
                    "urlListList":[
                        "http://p3-webcast.douyinpic.com/img/webcast/user_grade_level_v5_1.png~tplv-obj.image"
                    ],
                    "uri":"",
                    "height":"16",
                    "width":"32",
                    "avgColor":"",
                    "imageType":1,
                    "openWebUrl":"",
                    "content":{
                        "name":"",
                        "fontColor":"",
                        "level":"1",
                        "alternativeText":"荣誉等级1级勋章"
                    },
                    "isAnimated":false,
                    "flexSettingListList":[

                    ],
                    "textSettingListList":[

                    ]
                }
            ],
            "followInfo":{
                "followingCount":"490",
                "followerCount":"57",
                "followStatus":"0",
                "pushStatus":"0",
                "remarkName":""
            },
            "payGrade":{
                "totalDiamondCount":"0",
                "name":"",
                "nextName":"",
                "level":"1",
                "nextDiamond":"0",
                "nowDiamond":"0",
                "thisGradeMinDiamond":"0",
                "thisGradeMaxDiamond":"0",
                "payDiamondBak":"0",
                "gradeDescribe":"",
                "gradeIconListList":[

                ],
                "screenChatType":"0",
                "newImIconWithLevel":{
                    "urlListList":[
                        "http://p3-webcast.douyinpic.com/img/webcast/user_grade_level_v5_1.png~tplv-obj.image"
                    ],
                    "uri":"",
                    "height":"16",
                    "width":"32",
                    "avgColor":"",
                    "imageType":1,
                    "openWebUrl":"",
                    "isAnimated":false,
                    "flexSettingListList":[

                    ],
                    "textSettingListList":[

                    ]
                },
                "newLiveIcon":{
                    "urlListList":[
                        "http://p6-webcast.douyinpic.com/img/webcast/aweme_pay_grade_2x_1_4.png~tplv-obj.image"
                    ],
                    "uri":"",
                    "height":"12",
                    "width":"12",
                    "avgColor":"",
                    "imageType":1,
                    "openWebUrl":"",
                    "isAnimated":false,
                    "flexSettingListList":[

                    ],
                    "textSettingListList":[

                    ]
                },
                "upgradeNeedConsume":"0",
                "nextPrivileges":"",
                "score":"0",
                "gradeBanner":""
            },
            "fansClub":{
                "data":{
                    "clubName":"",
                    "level":0,
                    "userFansClubStatus":0,
                    "badge":{
                        "iconsMap":[
                            [
                                0,
                                {
                                    "urlListList":[

                                    ],
                                    "uri":"",
                                    "height":"0",
                                    "width":"0",
                                    "avgColor":"",
                                    "imageType":0,
                                    "openWebUrl":"",
                                    "isAnimated":false,
                                    "flexSettingListList":[

                                    ],
                                    "textSettingListList":[

                                    ]
                                }
                            ]
                        ],
                        "title":""
                    },
                    "availableGiftIdsList":[

                    ],
                    "anchorId":"0",
                    "badgeType":0
                },
                "preferDataMap":[

                ]
            },
            "specialId":"",
            "realTimeIconsList":[

            ],
            "newRealTimeIconsList":[

            ],
            "topVipNo":"0",
            "userAttr":{
                "isMuted":false,
                "isAdmin":false,
                "isSuperAdmin":false,
                "adminPrivilegesList":[

                ]
            },
            "payScore":"0",
            "ticketCount":"0",
            "linkMicStats":0,
            "displayId":"1101740900",
            "withCommercePermission":false,
            "withFusionShopEntry":false,
            "totalRechargeDiamondCount":"0",
            "verifiedContent":"",
            "topFansList":[

            ],
            "secUid":"MS4wLjABAAAAwsjArKgY6Qc4yLmDTNLJmSIdUt70ICtdfX2hAcqyjuU",
            "userRole":0,
            "authorizationInfo":3,
            "adversaryAuthorizationInfo":0,
            "mediaBadgeImageListList":[

            ],
            "adversaryUserStatus":0,
            "commerceWebcastConfigIdsList":[

            ],
            "badgeImageListV2List":[
                {
                    "urlListList":[
                        "http://p3-webcast.douyinpic.com/img/webcast/user_grade_level_v5_1.png~tplv-obj.image"
                    ],
                    "uri":"",
                    "height":"16",
                    "width":"32",
                    "avgColor":"",
                    "imageType":1,
                    "openWebUrl":"",
                    "content":{
                        "name":"",
                        "fontColor":"",
                        "level":"1",
                        "alternativeText":"荣誉等级1级勋章"
                    },
                    "isAnimated":false,
                    "flexSettingListList":[

                    ],
                    "textSettingListList":[

                    ]
                }
            ],
            "locationCity":"",
            "remarkName":"",
            "mysteryMan":1,
            "webRid":"",
            "desensitizedNickname":"wawo~",
            "allowBeLocated":false,
            "allowFindByContacts":false,
            "allowOthersDownloadVideo":false,
            "allowOthersDownloadWhenSharingVideo":false,
            "allowShareShowProfile":false,
            "allowShowInGossip":false,
            "allowShowMyAction":false,
            "allowStrangeComment":false,
            "allowUnfollowerComment":false,
            "allowUseLinkmic":false,
            "bgImgUrl":"",
            "birthdayDescription":"",
            "birthdayValid":false,
            "blockStatus":0,
            "commentRestrict":0,
            "constellation":"",
            "disableIchat":0,
            "enableIchatImg":"0",
            "exp":0,
            "fanTicketCount":"0",
            "foldStrangerChat":false,
            "followStatus":"0",
            "hotsoonVerified":false,
            "hotsoonVerifiedReason":"",
            "ichatRestrictType":0,
            "idStr":"",
            "isFollower":false,
            "isFollowing":false,
            "needProfileGuide":false,
            "payScores":"0",
            "pushCommentStatus":false,
            "pushDigg":false,
            "pushFollow":false,
            "pushFriendAction":false,
            "pushIchat":false,
            "pushStatus":false,
            "pushVideoPost":false,
            "pushVideoRecommend":false,
            "verifiedMobile":false,
            "verifiedReason":"",
            "withCarManagementPermission":false,
            "ageRange":0,
            "watchDurationMonth":"0"
        },
        "content":"前驱车不行",
        "visibleToSender":false,
        "fullScreenTextColor":"",
        "publicAreaCommon":{
            "userLabel":{
                "urlListList":[
                    "http://p3-webcast.douyinpic.com/img/webcast/userlabel_new_chat.png~tplv-obj.image"
                ],
                "uri":"",
                "height":"0",
                "width":"0",
                "avgColor":"#524037",
                "imageType":0,
                "openWebUrl":"",
                "isAnimated":false,
                "flexSettingListList":[

                ],
                "textSettingListList":[

                ]
            },
            "userConsumeInRoom":"0",
            "userSendGiftCntInRoom":"0"
        },
        "agreeMsgId":"0",
        "priorityLevel":0,
        "eventTime":"1672207544",
        "sendReview":false,
        "fromIntercom":false,
        "intercomHideUserCard":false,
        "chatTagsList":[

        ],
        "chatBy":"0"
    }
]
 */


// console.log(arr)
const content = res_decode(v)

// console.log(JSON.stringify(content, null, 2));

console.log(content[1].content)
