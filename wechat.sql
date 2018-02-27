SET NAMES UTF8;
DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat CHARSET=UTF8;

USE chat;
CREATE TABLE dialogue (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'id pk',
  question TEXT NOT NULL COMMENT '问题',
  answer TEXT NOT NULL COMMENT '回答'
) COMMENT '聊天表';

INSERT INTO dialogue(id, question, answer) VALUES (NULL,'肉丝，嫁给我吧', '我怕我配不上你，我曾经有一段刻骨铭心的惨痛经历。'),
                                                  (NULL, '说出来吧，不管是什么，我都能接受', '我爱杰克'),
                                                  (NULL, '接的多吗', '滚球！！！！！！！');