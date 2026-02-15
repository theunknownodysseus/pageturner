package com.bookmarkshop.bookmarks.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "bookmarks")
public class Bookmark {

    @Id
    private String id;

    private String title;
    private String url;
}
