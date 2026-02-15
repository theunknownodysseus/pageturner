package com.bookmarkshop.bookmarks.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "orders")
public class Order {

    @Id
    private String id;

    private String name;
    private String design;
    private int quantity;
}
