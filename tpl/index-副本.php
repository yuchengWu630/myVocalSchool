<?php
// 连接数据库
$conn = mysqli_connect('127.0.0.1','root','','vocal_school',3306);
mysqli_query($conn,'SET NAMES UTF8');
//获取头部表数据
$sql = 'SELECT * FROM vocal_header';
$result = mysqli_query($conn,$sql);
$header = mysqli_fetch_assoc($result);

//获取导航内容数据
$sql = 'SELECT * FROM vocal_nav';
$navs = mysqli_query($conn,$sql);

//获取课程轮播列表数据
$sql = 'SELECT * FROM course_list';
$course = mysqli_query($conn,$sql);

//获取讲师轮播列表数据
$sql = 'SELECT * FROM teachers';
$teachers = mysqli_query($conn,$sql);

//获取学生轮播列表数据
$sql = 'SELECT * FROM students';
$students = mysqli_query($conn,$sql);

//获取文章大图文数据
$sql = 'SELECT * FROM article_top';
$result = mysqli_query($conn,$sql);
$articleTop = mysqli_fetch_assoc($result);
//获取文章小图列表数据
$sql = 'SELECT * FROM article_list';
$articleList = mysqli_query($conn,$sql);

$sql = 'SELECT * FROM footer_title';
$footerTit = mysqli_query($conn,$sql);

$sql = 'SELECT * FROM footer_map';
$footerMap = mysqli_query($conn,$sql);

$sql = 'SELECT * FROM footer_cont';
$footerCont = mysqli_query($conn,$sql);

$sql = 'SELECT * FROM footer';
$footer = mysqli_query($conn,$sql);
?>
<!DOCTYPE html>
<html>
<head lang="zh-cn">
    <meta charset="UTF-8">
    <title><?php echo $header['tit_name']?></title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
    <link rel="stylesheet" href="css/vocal.css"/>
    <link rel="icon" href="<?php echo $header['icon']?>"/>
</head>
<body>

    <!--1,页面顶部-->
    <header id="top">
        <div class="section_inner">
            <h1 class="vbs_title">
                <a href="#">
                    <img src=<?php echo $header['logo']?> alt="VBS声乐系统"/>
                </a>
            </h1>
            <!-- 1-1, logo和搜索框-->
            <div class="top_search">
                <div class="search_inner">
                    <input type="text" class="search_input" aria-label="请输入搜索的内容" placeholder="请输入搜索的内容" maxlength="18 "/>
                    <button class="search_btn">
                        <i class="i_search"></i>
                    </button>
                </div>
            </div>
            <!--登录框和注册框-->
            <div class="top_user">
                <div class="register_inner">
                    <a href="#"><i class="i_register"></i>登录</a>
                </div>
            </div>
            <div class="top_add">
                <div class="add_inner">
                    <a href="tpl/register.html"><i class="i_add"></i>注册</a>
                </div>
            </div>
            <p class="vbs_balance">
                <a href="#">
                    <img src=<?php echo $header['logo_info']?> alt="VBS声乐系统"/>
                </a>
                <br/>
                <a href="#" class="language">繁体版</a>|<a href="#" class="language">简体版</a>
            </p>
        </div>
        <!-- 1-1, logo和搜索框-->
    </header>
    <!--2,主导航-->
    <nav id="nav">
        <div class="top_nav">
            <ul class="nav_inner">
            <?php
                foreach($navs as $value){
                echo "<li class='nav_item'>";
                echo "<a href='#'>$value[nav_tit]</a>";
                echo "</li>";
                }
            ?>
            </ul>
        </div>
    </nav>
    <!--3,轮播课程展示区-->
    <div id="c_course">
        <div class="section_inner">
            <!--3-1 标题头-->
            <div class="course_header">
                <h1 class="course_title">
                    <i class="course_title_pokemon"></i>
                </h1>
                <i class="title_line title_line_left"></i>
                <i class="title_line title_line_right"></i>
            </div>
            <a href="#" class="course_a_all">
                全部
                <i class="course_i_all"></i>
            </a>
            <!--3-2 轮播内容显示区-->
            <div class="course_box">
                <ul class="course_list">
                    <?php
                        foreach($course as $value){
                        echo "<li class='course_list_item'>";
                        echo "<div class='course_list_item_box'>";
                        echo "<div class='course_list_cover'>";
                        echo "<a href='#'>";
                        echo "<img src=$value[pic]  class='course_pic'>";
                        echo "</a>";
                        echo "<i class='course_list_opacity'></i>";
                        echo "<i class='course_list_play'></i>";
                        echo "</div>";
                        echo "<h4 class='course_list_introduce'>";
                        echo "<span class='course_span'><a href='#' class='course_list_a'>$value[cont]</a></span>";
                        echo "</h4>";
                        echo "<div class='course_list_teacher'>";
                        echo "<a href='#' class='course_list_teacher_a'>$value[tname]</a>";
                        echo "</div></div></li>";
                        }
                    ?>
                </ul>
            </div>
            <!--轮播页码区-->
            <div class="course_list_pagenumber">
                <a href="javascript:void(0)" class="course_item_jump course_item_jump_active">
                    <i class="course_item_jump_page "></i>
                    <i>1</i>
                </a>
                <a href="javascript:void(0)" class="course_item_jump">
                    <i class="course_item_jump_page"></i>
                    <i>2</i>
                </a>
                <a href="javascript:void(0)" class="course_item_jump">
                    <i class="course_item_jump_page"></i>
                    <i>3</i>
                </a>
                <a href="javascript:void(0)" class="course_item_jump">
                    <i class="course_item_jump_page"></i>
                    <i>4</i>
                </a>
            </div>
        </div>
        <div class="course_button">
            <div class="mouse_region mouse_region_left">
                <a class="mouse_left_btn mouse_btn_action">
                    <i class="mouse_left_action"></i>
                    <i class="txt_hidden">上一页</i>
                </a>
            </div>
            <div class="mouse_region mouse_region_right">
                <a class="mouse_right_btn mouse_btn_action">
                    <i class="mouse_right_action"></i>
                    <i class="txt_hidden">下一页</i>
                </a>
            </div>
        </div>
    </div>
    <!--4,轮播教师展示区-->
    <div id="c_teacher">

            <div class="course_header c_teacher_header">
                <h1 class="course_title">
                    <i class="course_title_pokemon c_teacher_title"></i>
                </h1>
                <i class="title_line title_line_left c_teacher_line_left"></i>
                <i class="title_line title_line_right c_teacher_line_right"></i>
            </div>
            <div class="section_inner">
                <div class="course_box">
                    <ul class="c_teacher_list">
                    <?php
                        foreach($teachers as $value){
                             echo "<li class='c_teacher_item'>";
                             echo "<a href='#'>";
                             echo "<img src=$value[pic] class='c_teacher_item_img'>";
                             echo "</a>";
                             echo "<i class='course_list_opacity'></i>";
                             echo "<i class='c_teacher_list_go'></i>";
                             echo "</li>";
                        }
                    ?>
                    </ul>
                </div>
            </div>
        <div class="course_list_pagenumber c_teacher_list_pagenumber">
            <a href="#" class="course_item_jump course_item_jump_active c_teacher_item_jump">
                <i class="course_item_jump_page c_teacher_item_jump_page"></i>
                <i>1</i>
            </a>
            <a href="#" class="course_item_jump c_teacher_item_jump">
                <i class="course_item_jump_page c_teacher_item_jump_page"></i>
                <i>2</i>
            </a>
        </div>
        <svg id="c_teacher_bg"></svg>
    </div>
    <!--5,学生展示分享区-->
    <div id="student">
        <div class="section_inner">
            <div class="course_header">
                <h1 class="course_title">
                    <i class="course_title_pokemon student_title"></i>
                </h1>
                <i class="title_line title_line_left"></i>
                <i class="title_line title_line_right"></i>
            </div >
            <a href="#" class="course_a_all">
                全部
                <i class="course_i_all"></i>
            </a>
            <div class="course_box">
                <ul class="student_list">
                    <?php
                    foreach($students as $value){
                         echo "<li class='student_list_item'>";
                         echo "<div class='student_pic'>";
                         echo "<a href='#'><img src='$value[pic]' class='main_pic_img'></a>";
                         echo "<i class='course_list_opacity'></i>";
                         echo "<i class='c_teacher_list_go'></i>";
                         echo "</div>";
                         echo "<div class='student_introduce'>";
                         echo "<h4 class='student_introduce_name'>";
                         echo "<a href='#' class='student_introduce_name_a'>$value[sname]</a></h4>";
                         echo "<div class='student_introduce_glory'>";
                         echo "<a href='#' class='student_introduce_glory_a'>$value[honor]</a></div>";
                         echo "<p class='student_introduce_content'>";
                         echo "<a href='#' class='student_introduce_content_a'>$value[cont]</a></p>";
                         echo "</div></li>";
                    }
                    ?>
                </ul>
            </div>
            <div class="course_list_pagenumber">
                <a href="#" class="course_item_jump course_item_jump_active">
                    <i class="course_item_jump_page "></i>
                    <i>1</i>
                </a>
                <a href="#" class="course_item_jump">
                    <i class="course_item_jump_page"></i>
                    <i>2</i>
                </a>
                <a href="#" class="course_item_jump">
                    <i class="course_item_jump_page"></i>
                    <i>3</i>
                </a>
                <a href="#" class="course_item_jump">
                    <i class="course_item_jump_page"></i>
                    <i>4</i>
                </a>
            </div>

        </div>
        <div class="course_button">
            <div class="mouse_region mouse_region_left">
                <a class="mouse_left_btn mouse_btn_action">
                    <i class="mouse_left_action"></i>
                    <i class="txt_hidden">上一页</i>
                </a>
            </div>
            <div class="mouse_region mouse_region_right">
                <a class="mouse_right_btn mouse_btn_action">
                    <i class="mouse_right_action"></i>
                    <i class="txt_hidden">下一页</i>
                </a>
            </div>
        </div>
    </div>
    <!--6,页面主体 唱歌文章 线上课程等等-->
    <section id="main">
        <div class="section_inner">
            <div class="main_content">
                <div class="course_header">
                    <h1 class="course_title">
                        <i class="course_title_pokemon main_title"></i>
                    </h1>
                    <i class="title_line title_line_left main_title_i"></i>
                    <i class="title_line title_line_right main_title_i"></i>
                </div>
                <div class="main_article">
                    <div class="main_pic">
                        <div class="main_pic_go">
                            <a href="#">
                                <img src="<?php echo $articleTop['pic']?>" alt="" class="main_pic_img">
                            </a>
                            <i class="course_list_opacity"></i>
                            <i class="main_button_go"></i>
                        </div>
                    </div>
                    <div class="main_article_content">
                        <span><a href="#" class="main_article_title_a"><?php echo $articleTop['tit']?></a></span>
                        <p class="main_article_p"><a href="#" class="main_article_p_a"><?php echo $articleTop['cont']?></a></p>
                    </div>
                </div>
                <div class="main_div" id="mainMouse">
                    <ul class="main_ul">
                    <?php
                        foreach($articleList as $value){
                             echo "<li><div class='main_ul_pic'>";
                             echo "<a href='#'><img src='img/jdsc.png'></a>";
                             echo "</div>";
                             echo "<div class='main_ul_title'>";
                             echo "<a href='#' class='main_ul_a'>CLASSIC</a>";
                             echo "<a href='#' class='main_ul_a'>$value[tit]</a>";
                             echo "</div>";
                             echo "<p class='main_ul_title_p'><a href='#' class='main_ul_title_a'>$value[cont]</a></p>";
                             echo "</li>";
                        }
                    ?>
                </ul>
                <div id="main_ul_course">
                        <div>
                            <a href="javaScript:void(0)" class="main_ul_course_a main_ul_course_a_active">
                                <i>1</i>
                            </a>
                        </div>
                        <div>
                            <a href="javaScript:void(0)" class="main_ul_course_a">
                                <i>2</i>
                            </a>
                        </div>
                        <div>
                            <a href="javaScript:void(0)" class="main_ul_course_a">
                                <i>3</i>
                            </a>
                        </div>
                        <div>
                            <a href="javaScript:void(0)" class="main_ul_course_a">
                                <i>4</i>
                            </a>
                        </div>
                        <div>
                            <a href="javaScript:void(0)" class="main_ul_course_a">
                                <i>5</i>
                            </a>
                        </div>
                        <div>
                            <a href="javaScript:void(0)" class="main_ul_course_a">
                                <i>6</i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="main_banner">
                    <div class="main_banner_box">
                        <a href="#">
                            <img src="img/banner1.png" class="main_banner_img" alt="">
                        </a>
                        <i class="course_list_opacity"></i>
                        <i class="main_button_go"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--7,页尾 导航-->
    <footer id="footer-content">
        <div class="footer_title">
            <a href="#" class="vbs_logo">
            </a>
        </div>
        <div class="section_inner">
            <?php
                 $i=0;
                 foreach($footerTit as $value){
                      $i++;
                      echo "<div class='footer_box'>";
                      echo "<h3 class='footer_box_title'>$value[tit]</h3>";
                      echo "<ul>";
                      if($i<3){
                      foreach($footerMap as $item){
                           echo "<li><a href='#'>$item[map]</a></li>";
                      }
                      echo "</ul>";
                      }
                      else{
                      foreach($footerCont as $item){
                           echo "<li><a href=''>$item[cont]</a></li>";
                      }
                      echo "</ul>";
                      }
                      echo "</div>";
                 }
            ?>
        <div class="footer_copyright">
            <?php
                $i=0;
                echo "<p>";
                foreach($footer as $value){
                      $i++;
                      if($i<10){
                      echo "<a href='#'>$value[tit]</a> |";
                      }
                      else if($i ==10){
                      echo "<p>$value[tit]";
                      }else if($i ==11){
                      echo "<a href='#'>$value[tit]</a></p>";
                      }else if($i ==12){
                      echo "<p>$value[tit]";
                      }else if($i ==13){
                      echo "<a href='#'>$value[tit]</a> ";
                      }else{
                      echo "<a href='#'>$value[tit]</a></p>";
                      }
                }
            ?>
        </div>
    </footer>

    <!--登录-->
    <div id="vocal_login" class="vocal_login vocal_login_box">
        <div class="login_header">
            <h2 class="login_title"><span class="login_title_text">登 录</span></h2>
        </div>
        <a href="javascript:;" class="login_close">
            <i class="login_close_icon login_sprite"></i>
            <i class="icon_txt">关闭</i>
        </a>
        <div class="login_body">
            <div class="login_body_content">
                <form id="index_login">
                    <div class="user_login">
                        <div class="login_input_inner">
                            <span class="login_span">
                                <i class="i_icon"></i>
                            </span>
                            <input type="text" class="login_input" aria-label="请输入搜索的内容" placeholder="请输入您的用户名" maxlength="17" id="username" name="uname"/>
                        </div>
                        <span class="login_useradd"><a href="tpl/register.html">新用户注册</a></span>
                        <p class="login_validate"></p>
                    </div>
                    <div class="user_login_last">
                        <div class="login_input_inner">
                            <span class="login_span">
                                <i class="i_icon i_pwd"></i>
                            </span>
                            <input type="password" class="login_input" aria-label="请输入搜索的内容" placeholder="请输入您的密码" maxlength="17"id="userpwd" name="upwd"/>
                        </div>
                        <span class="login_useradd"><a href="JavaScript:">忘记密码?</a></span>
                        <p class="login_validate"></p>
                    </div>
                    <div class="user_login_last">
                            <input type="button" value="登 录" id="user_btn"/>
                    </div>
                    <div class="auto_login">
                        <input type="checkbox" id="auto_login_chk"/>
                        <label for="auto_login_chk">
                            <span>下次自动登录</span>
                        </label>
                        <span><a >意见反馈</a><a>报名教学</a></span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--登录遮罩层-->
    <div class="mask_layer" style="display: none"></div>


    <script src="js/teacher_bg.js"></script>
    <script src="js/vocal_school.js"></script>
</body>
</html>