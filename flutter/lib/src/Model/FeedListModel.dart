class FeedListModel {
  int? id;
  String? title;
  int? user_id;
  String? contents;
  String? board_type;
  DateTime? createdAt;

  FeedListModel.parse(Map m) {
    id = m['id'];
    title = m['title'];
    createdAt = DateTime.parse(m['created_at']);
    user_id = m['user_id'];
    contents = m['contents'];
  }

  FeedListModel.parseOne(Map m) {
    id = m['id'];
    contents = m['contents'];
    createdAt = DateTime.parse(m['create_at']);
    title = m['title'];
    user_id = m['user_id'];
    board_type = m['board_type'];
  }
}
