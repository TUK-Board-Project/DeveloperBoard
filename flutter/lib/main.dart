import 'package:developer_board/src/screen/login.dart';
import 'package:developer_board/src/widget/feed_item.dart';
import 'package:developer_board/src/widget/my_page.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import './src/screen/user/register.dart';
import './src/screen/home.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final prefs = await SharedPreferences.getInstance();
  final String? token = prefs.getString('token');
  runApp(MyApp(token));
}

class MyApp extends StatelessWidget {
  String? token;
  MyApp(this.token, {super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: (token == null) ? const Login() : const Home(),
    );
  }
}
