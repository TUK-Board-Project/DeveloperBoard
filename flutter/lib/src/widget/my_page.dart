import 'package:developer_board/src/screen/login.dart';
import 'package:flutter/material.dart';
import 'package:developer_board/src/widget/my_image.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';

class MyPage extends StatelessWidget {
  const MyPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("마이페이지"),
        centerTitle: true,
      ),
      body: Container(
        child: Column(
          children: [
            Expanded(
              child: Column(
                children: [
                  Row(
                    children: [
                      MyImage(),
                      SizedBox(
                        width: 20,
                      ),
                      Text(
                        '이름: 이관용',
                      ),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      TextButton(
                        onPressed: null,
                        child: Text('내가 쓴 글'),
                      ),
                      TextButton(
                        onPressed: null,
                        child: Text('내가 댓글 쓴 글'),
                      ),
                      TextButton(
                        onPressed: () async {
                          final prefs = await SharedPreferences.getInstance();
                          prefs.clear();
                          Navigator.pushReplacement(context,
                              MaterialPageRoute(builder: (b) => Login()));
                        },
                        child: Text('로그아웃'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
