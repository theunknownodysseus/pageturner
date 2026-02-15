package com.bookmarkshop.bookmarks.repository;

import com.bookmarkshop.bookmarks.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
}
