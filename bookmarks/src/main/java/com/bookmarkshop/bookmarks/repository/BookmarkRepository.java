package com.bookmarkshop.bookmarks.repository;

import com.bookmarkshop.bookmarks.model.Bookmark;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookmarkRepository extends MongoRepository<Bookmark, String> {
}
