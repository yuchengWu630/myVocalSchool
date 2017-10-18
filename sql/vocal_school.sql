SET NAMES 'UTF8';
DROP DATABASE IF EXISTS vocal_school;
CREATE DATABASE vocal_school CHARSET = UTF8;
USE vocal_school;
CREATE TABLE vocal_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(20) NOT NULL DEFAULT '',
    upwd VARCHAR(20) NOT NULL DEFAULT '',
    uemail VARCHAR(30) NOT NULL DEFAULT ''
);


CREATE TABLE vocal_nav(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    nav_tit VARCHAR(20) NOT NULL DEFAULT ''
);

INSERT INTO vocal_nav VALUES
(NULL,'首页'),
(NULL,'VBS'),
(NULL,'课程'),
(NULL,'学员证照'),
(NULL,'声乐教练'),
(NULL,'视频专区'),
(NULL,'专栏'),
(NULL,'联系我们'),
(NULL,'订阅电子报');

CREATE TABLE vocal_header(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    tit_name  VARCHAR(20) NOT NULL DEFAULT '',
    logo VARCHAR(30) NOT NULL DEFAULT '',
    logo_info VARCHAR(30) NOT NULL DEFAULT '',
    icon VARCHAR(30) NOT NULL DEFAULT ''
);

INSERT INTO vocal_header VALUES
(NULL,'Vocal Music College','img/logo.png','img/vocalbalanceinfo.png','img/icon.png');

CREATE TABLE course_list(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(30) NOT NULL DEFAULT '',
    cont VARCHAR(100) NOT NULL DEFAULT '',
    tname VARCHAR(10) NOT NULL DEFAULT ''
);

INSERT INTO course_list VALUES
(NULL,'img/c1.png','为了避免让同学们认知中的假声跟真声在音高的转化过程中产生断层,本次的学习会让演唱更加的顺畅自然~','蔡岳伦 Leo'),
(NULL,'img/c4.png','及琮老师献上,新年第一首翻唱歌曲,挑战陌生语言,克服五种不同声线,重新编曲,呕心沥血带来韩国BIGBANG《IF YOU》','彭及琮 Tobi'),
(NULL,'img/c5.png','Leo老师《可惜不是你》,细腻的情绪铺垫及琮老师《洋葱》开头潇洒后期能量爆发府鑫老师《落叶归根》温柔沧桑唱述家乡','Vocal Coaches'),
(NULL,'img/c8.png','本週Leo老师将要挑战《猿系歌手-高恺蔚》，爱唱歌的各位一定听过他的名号，Leo老师该拿他如何是好？！','高恺蔚&蔡岳伦'),
(NULL,'img/c7.png','浚玮老师要剖析的是金曲歌王萧敬腾，其华丽且独特的演唱方式，一直十分受到听众喜爱。认识这位摇滚歌王～','吴浚玮 JIM'),
(NULL,'img/c9.png','为什么接收到同样的文字讯息，每个人的解读却会有这么大的不同呢？这样的问题不仅在生活的沟通上会造成问题，在歌唱学习上更是很容易造成学习瓶颈的一大关键！','蔡岳伦 Leo'),
(NULL,'img/c6.png','本週Leo老师将要挑战谢博安，获得超级偶像第七届冠军的他，竟然让Leo老师陷入前所未见的失败危机？！','谢博安&蔡岳伦'),
(NULL,'img/c10.png','及琮老师挥出强劲的第一棒！完全不会韩文的他挑战韩国超强男团-Bigbang《if you》？他会如何克服语言和歌曲中5人不同声线的障碍呢？','彭及琮 Tobi'),
(NULL,'img/c11.png','为了在演唱中制造某些情绪，我们会适量地利用气音使歌曲有更丰富的层次。及琮老师教大家喉位偏低的气音使用方式，并用杨宗纬的『那个男人』为大家作歌曲示范～','彭及琮 Tobi'),
(NULL,'img/c12.png','府鑫老师翻唱陶喆的《摇篮曲》 实在是太感人太催泪啦！府鑫老师要教你如何运用九宫格的概念，以发声动作带出正面温暖的音色，进一步应用到歌曲的情绪铺陈里喔！','董府鑫 Johnny'),
(NULL,'img/c13.png','及琮老师针对韩式唱腔中的特色气音做重点教学，这次的主题是询问度超高，且在歌曲中有画龙点睛效果的撕・裂・音！！','彭及琮 Tobi'),
(NULL,'img/c15.png','由Leo老师独创的『九宫格歌唱学习法』是VBS的教学中最核心的主轴Leo老师将一步一步带大家瞭解九宫格歌唱学习法，让学习能够更加容易更有效率！','蔡岳伦 Leo'),
(NULL,'img/c1.png','为了避免让同学们认知中的假声跟真声在音高的转化过程中产生断层,本次的学习会让演唱更加的顺畅自然~','蔡岳伦 Leo'),
(NULL,'img/c4.png','及琮老师献上,新年第一首翻唱歌曲,挑战陌生语言,克服五种不同声线,重新编曲,呕心沥血带来韩国BIGBANG《IF YOU》','彭及琮 Tobi'),
(NULL,'img/c5.png','Leo老师《可惜不是你》,细腻的情绪铺垫及琮老师《洋葱》开头潇洒后期能量爆发府鑫老师《落叶归根》温柔沧桑唱述家乡','Vocal Coaches');



CREATE TABLE teachers(
    tid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(30) NOT NULL DEFAULT ''
);

INSERT INTO teachers VALUES
(NULL,'img/t1.png'),
(NULL,'img/t2.png'),
(NULL,'img/t3.png'),
(NULL,'img/t4.png'),
(NULL,'img/t5.png'),
(NULL,'img/t1.png'),
(NULL,'img/t2.png'),
(NULL,'img/t3.png'),
(NULL,'img/t4.png');


CREATE TABLE students(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(30) NOT NULL DEFAULT '',
    sname VARCHAR(20) NOT NULL DEFAULT '',
    honor VARCHAR(30) NOT NULL DEFAULT '',
    cont VARCHAR (200) NOT NULL DEFAULT ''
);

INSERT INTO students VALUES
(NULL,'img/wu.jpg','吴忠明','超级星光大道②十强','“哈啰大家好！我是大Ｑ吴忠明，现在是滚石唱片旗下的艺人，我很高兴在2007年参加中视的超级星光大道之前，有机会认识了Leo老师，在他热情活泼的风格中，教导我许多唱歌的技巧，加强我的基本底子，更启发我的特质，让我对自己的声音有更多更多的发现和认同，同时感染我对于娱乐事业有强烈的兴趣和目标。此外，不论是一般时下流行或是各种风格，他都可以提供强大的帮助和指导，实在是自我进步兼培养兴趣及才艺的良师一枚，谢谢Leo老师～～”'),
(NULL,'img/ji.jpg','纪言恺','主持人 ,演员 ,歌手','声音的表情Tone调在我的工作领域中占有非常重要的角色，不管唱歌、主持和演戏都需要强烈的声音表达。感谢Leo帮助我寻找正确的发声位置，让我能用好听的声音完整表达我的情感~~!'),
(NULL,'img/mandy.jpg','M a n d y','超级偶像⑤第十三名','一直以来我都是一个爱唱歌的人，总以为“唱歌”不就是在浴室里哼哼唱唱， 能发出声音、不走音就好了，哪有那么多细节需要讲究呢？但随着自己对于 歌唱的兴趣及自我要求逐渐增长，渐渐在过程当中思考”是否有让声音更好 的方式呢?”，于是我便开始寻找外界的协助，包括一些网路上的歌唱教学影 片，也接受了几堂歌唱名师的课程，但在这一连串的学习过程中，却反而让 我产生了更多的疑惑，丹田唱歌就是一个很好的例子'),
(NULL,'img/chen.jpg','陈薇','我要当歌手 七强卫冕者','跟Leo老师上课让我更了解自己的声音和唱歌的构造，学习的过程中 Leo老师会一一点出我的问题，然后用原理引导我如何找到调整的方式 ，同时也提醒我保留自己原本的表情，这对我来说真的非常宝贵，谢谢 Leo老师和VBS团队！'),
(NULL,'img/s1.jpg','小小','女高音 , 音乐总监','我以前曾被许多人问：“你这样唱歌不累吗？”尽管唱了好几年，我的音量和音高同时放大时仍会让人觉得紧张，而且连续唱还容易口干舌燥甚至哑掉。开始在VBS上课后，Leo老师从最基本的声带认识开始讲解，做了许多声带夹紧的训练，体会到“唱久也不累、音色亮而饱满却不致哑嗓”的歌唱方式，奇妙的无声训练更让我随时随地都可以练习。再来还有如何放低、放松喉头，瞬间解决了我高音刺耳的问题。 而后还有歌曲的实际应用，如何利用空气多寡、喉头位置创造不同音色等等，所有上课练习的技巧都很容易理解，也非常受用！不论你想学唱歌，还是想修正声音问题，都真心推荐大家来VBS寻找对的声音、属于你的声音！'),
(NULL,'img/s2.jpg','唐从圣','主持人 , 演员 , 歌手','练唱就跟练功一样，必须持之以恒，不断的自我要求！但有好的老师指导，就可以缩短自己迷失、摸索的过程，感谢Leo老师在我出专辑期间提供的指导， 让我在唱歌的时候可以找到自信！'),
(NULL,'img/s3.jpg','郑又轩','我要当歌手⑦强卫冕者','刚来到VBS上课，老师就发现我长久以来压迫声带唱歌的坏习惯，第一步就是教我如何控制声带的闭合，什么是松什么是紧，我才了解到发声原来是一门物理运动，需要不断练习来增加自己的稳定度，而一首歌即是发声和情感的结合，情感又是另一门学问，也可以说像是化学作用吧，藉由歌词和自己的情绪把心里的感觉抒发出来！在VBS，可以说是上了一堂珍贵的教唱(理化)课！老师们都很亲切，以激发的方式代替鞭策，以玩笑代替责骂，让我上课没有压力又能得到丰收的硕果，在歌唱道路上经过VBS的洗练，想必能留下璀璨的轨迹！'),
(NULL,'img/s4.jpg','吴浚玮','乐队主唱创作大赛冠军','在遇到VBS前，我在练唱的过程中只注意两点，不走音，以及“不计方式” 的把音域往上和往下拓展，幸运地，经过一段时间练习，我的确可以挑战较 高音的歌曲，也觉得练习得到的成果有成效。但随着自己创作歌曲和表演，我渐渐遇到瓶颈：创作上，在较高的音域，喉 咙只能用力夹，少了演唱方式的选择性，让我唱不出想要表达的情绪。表演 部份，激昂的歌曲后我常感喉咙疲累，声音沙哑，这时若再接唱抒情的歌 曲，就很容易破绽百出，甚至破音。 接触VBS的老师们后，我从全新的角度去认识“唱歌”这件事，弹唇、嘟 嘴，每一个看似简单的练习，都让我更深入了解自己的喉部发声动作。 VBS提供明确的目标和科学的概念，经过一段时间的练习，我确实地感受到 音域的拓展及音质的改变，这是我从未想到的。衷心感谢VBS所带来的美好！'),
(NULL,'img/s5.jpg','T e r r y ','前棒棒堂成员 , 主持人','我不会唱歌，我不懂音乐。小时候我最强的乐器是直笛，很好笑吧! 断层了一段时间，我不懂啥是音乐了。自从跟Leo老师上课后我重新找到了我对音乐的信心。不厌其烦的教导我运用身体来找到声音的灵感，认识声音，学习运用声音。半年后我从音痴进步到能唱跳合一，也重新认识了自己的声音。Leo老师的教学相当的专业。重点是引导学生找到自己声音的方向。具有系统化的循序渐进。我只能说"太神奇了"!!Leo Thanks a lot!!'),
(NULL,'img/s6.jpg','黄丞','超级偶像第七季选手','自从来到VBS上课，我觉得我演唱技巧有很明显的进步，从基础的发声到歌曲的诠释老师都会很仔细的说明及训练，任何问题都会被察觉并深入的讨论并改 进，甚至很多是自己从未发现过的问题，在这里都会得到最满意的答案，并且会很充实的进步。'),
(NULL,'img/s7.jpg','谢博安','超级偶像第七季冠军','我很庆幸上帝能带领我来到VBS，因为我正处于变声低潮，对于唱歌 越来越没自信，而且很吃力，不过来到这里上课后，对于唱歌的发声 方式有了全新的见解，更使我能了解自己的声音并利用。所以，若对 于歌唱有任何的不解或是深层兴趣，就来VBS吧！一起成为航海王吧！'),
(NULL,'img/s8.jpg','曾昱嘉','超级偶像第四季冠军','上课时，老师会充分让我知道自己唱歌长久以来不正确的地方，并且可以加以改善。老师会用很多基础发声练习来调整，再来还有许多方法让我找到许多唱歌不同的音色。还可以了解在不同的歌曲上，如何发挥不同的音色。在上课的时候真的学到很多！'),
(NULL,'img/s9.jpg','何大为','星光大道梦之声前十二','I started taking lessons from Leo half way during my journey in 星光大道 . I was never professionally trained or trained at all vocally. I learned mostly from my favorite singers or on YouTube.Therefore, as most people would do, I learned from copying what I hear, the high notes, the groove, and the techniques. Then I realized that I was only trying to sound like them but never trying to sing like them.I started looking for vocal coaches and was introduced by a friend to VBS. I was totally in awe during my first 30 minute meeting with Leo.In only 30 minutes, I realized how wrong and damaging I my singing techniques were, and how much using the right technique allows me to not only sing healthily but beautifully.'),
(NULL,'img/s10.jpg','刘轩','演说家 , 广播主持','Leo帮助我找到最适合我的发声位置，也让我比较不费力就能够有较亮的说话声音。由此可见，即使不是歌手，也能够从VBS中获得许多帮助。'),
(NULL,'img/s11.jpg','钟欣怡','演员 , 主持人','大家好，我是钟欣怡，认识Leo老师其实很多年了，这一路走来，起初我是想要学习唱歌，所以找了Leo老师。但是我后来发现，在我们日常生活中，尤其是在我们演艺圈，不只是唱歌需要用到声音，在主持方面这个声音也是非常重要的，我自己知道我自己的声音比较High，比较高，其实就会比较尖锐。那如何在尖锐的高音当中，可以让它比较舒服、怎么样去运用，而且怎么样的呼吸，其实自己不太知道，只是觉得每次主持完活动时，都觉得好累。但是Leo老师常常提醒我该怎么去运用我的声音、怎么控制我的呼吸，其实学习完之后，我发现除了比较省力之外，我的声音也可以影响到人家觉得是舒服的。还有在演戏方面也非常的重要，声音不只是声音，它已经是一种情绪的语言了。所以Leo老师，我非常谢谢他，他不只是我的入门老师，也会是我这一辈子最棒的老师。也希望有兴趣的人，可以来到VBS声音平衡教学系统，相信你能跟我一样会有所获得哦!!!'),
(NULL,'img/s12.jpg','赵庭','超级偶像第七季选手','我很荣幸来到这里上课，这里老师人都很好，很欢乐， 也是非常的专业，教我改善唱歌的方式，让我进步了不少。 所以想学唱歌，就来这吧!! That s right !'),
(NULL,'img/wu.jpg','吴忠明','超级星光大道②十强','哈啰大家好！我是大Ｑ吴忠明，现在是滚石唱片旗下的艺人，我很高兴在2007年参加中视的超级星光大道之前，有机会认识了Leo老师，在他热情活泼的风格中，教导我许多唱歌的技巧，加强我的基本底子，更启发我的特质，让我对自己的声音有更多更多的发现和认同，同时感染我对于娱乐事业有强烈的兴趣和目标。此外，不论是一般时下流行或是各种风格，他都可以提供强大的帮助和指导，实在是自我进步兼培养兴趣及才艺的良师一枚，谢谢Leo老师～～'),
(NULL,'img/ji.jpg','纪言恺','主持人 ,演员 ,歌手','声音的表情Tone调在我的工作领域中占有非常重要的角色，不管唱歌、主持和演戏都需要强烈的声音表达。感谢Leo帮助我寻找正确的发声位置，让我能用好听的声音完整表达我的情感~~!'),
(NULL,'img/mandy.jpg','M a n d y','超级偶像⑤第十三名','一直以来我都是一个爱唱歌的人，总以为“唱歌”不就是在浴室里哼哼唱唱， 能发出声音、不走音就好了，哪有那么多细节需要讲究呢？但随着自己对于 歌唱的兴趣及自我要求逐渐增长，渐渐在过程当中思考”是否有让声音更好 的方式呢?”，于是我便开始寻找外界的协助，包括一些网路上的歌唱教学影 片，也接受了几堂歌唱名师的课程，但在这一连串的学习过程中，却反而让 我产生了更多的疑惑，丹田唱歌就是一个很好的例子'),
(NULL,'img/chen.jpg','陈薇','我要当歌手 七强卫冕者','跟Leo老师上课让我更了解自己的声音和唱歌的构造，学习的过程中 Leo老师会一一点出我的问题，然后用原理引导我如何找到调整的方式 ，同时也提醒我保留自己原本的表情，这对我来说真的非常宝贵，谢谢 Leo老师和VBS团队！');






CREATE TABLE article_top(
    atid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR (30) NOT NULL DEFAULT '',
    tit VARCHAR (20) NOT NULL DEFAULT '',
    cont VARCHAR(100) NOT NULL DEFAULT ''
);
CREATE TABLE article_list(
    alid INT PRIMARY KEY AUTO_INCREMENT,
    tit VARCHAR (20) NOT NULL DEFAULT '',
    cont VARCHAR(100) NOT NULL DEFAULT ''
);

INSERT INTO article_top VALUES
(NULL,'img/main01.jpg','其实会唱歌的人都做了这件事情','你身边也有很会唱歌的朋友吗？每次问他关于唱好歌的秘诀却总含糊地说没有啦没有啦......其实他们不约而同地都在背地里做了这些事......');

INSERT INTO article_list VALUES
(NULL,'先别说唱歌了，你会说故事吗？','常有同学总是抓不到表达歌曲情绪的诀窍，府鑫老师要跟大家分享一些例子，看看歌手们如何把歌词当成有旋律的故事，说给大家听～'),
(NULL,'你想速成吗?','常有同学会希望老师能给予一些快速达到成效的教学，但却对于一些基本的练习程序抱持着疑惑，府鑫老师在这边要跟大家分享，从老师的角度会如何建议同学们在学习歌唱时应有的重要概念~'),
(NULL,'成为有天份的歌唱学习者','是否有时会怀疑自己对于歌唱到底有没有天份呢？先天的能力会为学习上带来优势，但后天的练习也是很重要的关键，及琮老师今天在文章中告诉各位在歌唱遇到瓶颈时，分享一些建议以及学习分针，快来看看吧～'),
(NULL,'巨星的蜕变 张惠妹Amei','A-mei张惠妹的“AMeiZING Live 世界巡回演唱会DVD”终于在昨天发行了！不知道大家是不是又被A-mei的巨星风范再度震慑了一次呢？这次Leo老师也趁势翻出了A-mei历年来的专辑好好听...'),
(NULL,'成功来的就感觉来了?','但却对于一些基本的练习程序抱持着疑惑，其实只要你找到正确的感觉,很快就能上手,府鑫老师在这边要跟大家分享，从老师的角度会如何建议同学们在学习歌唱时应有的重要概念~'),
(NULL,'学唱歌的8个常识','在新的一年，学习歌唱的脚步也不能怠惰！Leo老师特别整理了学唱歌不容疏忽的八个重要观念，希望让你少走一点冤枉路～'),
(NULL,'态度决定高度','学习的态度和想法往往决定了你所能获得的结果，及琮老师教大家藉由重新认识自己的声音，渐渐了解如何有效率的控制自己的声音~'),
(NULL,'3个步骤解决声音断层','从低音到高音的过程中，常有同学会觉得声音无法顺畅连接，就好像有个窟窿，经过时总是会踩空一下...浚玮老师要带着大家按着步骤来：发现问题、找出原因、解决问题，彻底修復中音域的声音塌陷！'),
(NULL,'如何用清唱就能一鸣惊人？','许多人对于清唱总是带有恐惧。没有音乐的伴奏通常会把演唱上的缺点无情地暴露出来，但同时也是让我们检视歌唱能力的好机会。及琮老师与大家分享清唱时必须注意的关键点，即使没有乐器的衬托也能有迷人的演唱～'),
(NULL,'如何唱歌有感情？','要呈现扣人心弦的演唱，只要做到所谓歌曲的起伏就好了吗？海文老师提醒大家演唱时情感投入的最重要关键，让你的情绪表达更加明确，才能真正做到与听众『沟通』的演唱噢～'),
(NULL,'通往高音必备三关键!','追求高音常是许多同学在歌唱学习过程中共同追求的目标，但却不是所有人都能在勤奋练习后得到相对应的成果。及琮老师提出了三个练习高音时的大重点，让同学重新检视自己的努力是否都放在了对的地方~'),
(NULL,'为什么唱歌总是没Power?','力道十足有爆发力的歌声常是同学们想要拥有的声音特色，及琮老师将许多同学在练习时各自遇到的阻碍加以分类，并分别提供建议让同学们能够更有效率的掌握自己声音的“Power”~'),
(NULL,'先别说唱歌了，你会说故事吗？','常有同学总是抓不到表达歌曲情绪的诀窍，府鑫老师要跟大家分享一些例子，看看歌手们如何把歌词当成有旋律的故事，说给大家听～'),
(NULL,'你想速成吗?','常有同学会希望老师能给予一些快速达到成效的教学，但却对于一些基本的练习程序抱持着疑惑，府鑫老师在这边要跟大家分享，从老师的角度会如何建议同学们在学习歌唱时应有的重要概念~');



CREATE TABLE footer_title(
    ftid INT PRIMARY KEY AUTO_INCREMENT,
    tit VARCHAR (20) NOT NULL DEFAULT ''
);
CREATE TABLE footer_cont(
    fcid INT PRIMARY KEY AUTO_INCREMENT,
    cont VARCHAR(20) NOT NULL DEFAULT ''
);
CREATE TABLE footer_map(
    fcid INT PRIMARY KEY AUTO_INCREMENT,
    map VARCHAR(20) NOT NULL DEFAULT ''
);

INSERT INTO footer_title VALUES
(NULL,'参加教学暑期班'),
(NULL,'参加教学寒假班'),
(NULL,'合作伙伴');

INSERT INTO footer_map VALUES
(NULL,'北京'),
(NULL,'上海'),
(NULL,'广州'),
(NULL,'深圳'),
(NULL,'沈阳');

INSERT INTO footer_cont VALUES
(NULL,'QQ音乐'),
(NULL,'51sing'),
(NULL,'网易云音乐'),
(NULL,'百度'),
(NULL,'天天向上'),
(NULL,'好好学习'),
(NULL,'腾讯平台'),
(NULL,'台湾音乐创作协会'),
(NULL,'超级偶像');

CREATE TABLE footer(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    tit VARCHAR(100) NOT NULL DEFAULT ''
);
INSERT INTO footer VALUES
(NULL,'关于VBS'),
(NULL,'About VBS'),
(NULL,'服务条款'),
(NULL,'用户服务协议'),
(NULL,'隐私政策'),
(NULL,'广告服务'),
(NULL,'声乐招聘'),
(NULL,'客服中心'),
(NULL,'网站导航'),
(NULL,'Copyright © 1998 - 2017 Vocal Balance System. '),
(NULL,'All Rights Reserved.'),
(NULL,'VBS声乐教学系统'),
(NULL,'版权所有'),
(NULL,'VBS声乐教学经营许可证');

