import 'package:developer_board/src/Model/FeedListModel.dart';
import 'package:developer_board/src/controller/feed_controller.dart';
import 'package:developer_board/src/screen/feed/feed_create.dart';
import 'package:developer_board/src/widget/my_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';

final feedController = Get.put(FeedController());

class FeedShow extends StatefulWidget {
  final FeedListModel feed;
  const FeedShow(this.feed, {super.key});

  @override
  State<FeedShow> createState() => _FeedShowState();
}

class _FeedShowState extends State<FeedShow> {
  void initState() {
    super.initState();
    _feedShow();
  }

  _feedShow() {
    feedController.feedShow(widget.feed.id!);
  }

  _feedDelete() async {
    await feedController.feedDelete(widget.feed.id!);
    Get.back();
    Get.back();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('피드'),
      ),
      body: GetBuilder<FeedController>(builder: (b) {
        FeedListModel? feed = b.feedOne;
        if (feed == null) {
          return const CircularProgressIndicator();
        }
        return Container(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  const MyPage(),
                  const SizedBox(width: 20),
                  Text(
                    '${widget.feed.user_id}',
                    style: const TextStyle(fontSize: 18),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              Text("${widget.feed.title}"),
              const SizedBox(height: 20),
              Row(
                children: [
                  const Expanded(child: SizedBox()),
                  Text(
                    '${widget.feed.createdAt}',
                  ),
                ],
              ),
              const SizedBox(height: 20),
              Visibility(
                child: Row(
                  children: [
                    const Expanded(child: SizedBox()),
                    ElevatedButton(
                        onPressed: () {
                          Get.off(() => FeedCreate(beforeFeed: widget.feed));
                        },
                        child: const Text('수정')),
                    const SizedBox(width: 20),
                    ElevatedButton(
                        onPressed: () {
                          showDialog(
                            context: context,
                            builder: (context) {
                              return AlertDialog(
                                title: const Text("피드 삭제"),
                                content: const Text('정말 삭제하시겠습니까'),
                                actions: [
                                  TextButton(
                                    onPressed: () => Get.back(),
                                    child: const Text('Cancel'),
                                  ),
                                  TextButton(
                                    onPressed: _feedDelete,
                                    child: const Text('OK'),
                                  ),
                                ],
                              );
                            },
                          );
                        },
                        child: const Text('삭제')),
                  ],
                ),
              )
            ],
          ),
        );
      }),
    );
  }
}
