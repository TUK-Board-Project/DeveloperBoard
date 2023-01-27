import 'package:developer_board/src/Model/FeedListModel.dart';
import 'package:developer_board/src/screen/feed/feed_show.dart';
import 'package:developer_board/src/widget/my_image.dart';
import 'package:developer_board/src/widget/title.dart';
import 'package:flutter/material.dart';
import 'package:developer_board/src/widget/my_page.dart';
import 'package:developer_board/src/screen/feed/feed_show.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';

class FeedItem extends StatelessWidget {
  final FeedListModel feed;
  const FeedItem(this.feed, {super.key});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () async {
        final prefs = await SharedPreferences.getInstance();
        prefs.clear();
        Navigator.pushReplacement(
            context, MaterialPageRoute(builder: (b) => FeedShow(feed)));
      },
      child: Container(
        padding: EdgeInsets.all(10),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // const MyPage(),
            SizedBox(width: 10),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Text(
                        '${feed.title}',
                        style: TextStyle(
                            fontSize: 16, fontWeight: FontWeight.bold),
                      ),
                      SizedBox(
                        width: 10,
                      ),
                      Text(
                        '${feed.contents}',
                        style: TextStyle(fontSize: 12, color: Colors.grey),
                      ),
                    ],
                  ),
                  SizedBox(
                    height: 5,
                  ),
                  Text(
                    '${feed.createdAt}',
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
