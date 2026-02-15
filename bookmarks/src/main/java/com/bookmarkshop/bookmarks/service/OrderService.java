package com.bookmarkshop.bookmarks.service;

import com.bookmarkshop.bookmarks.model.Order;
import com.bookmarkshop.bookmarks.repository.OrderRepository;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final OrderRepository repo;

    public OrderService(OrderRepository repo) {
        this.repo = repo;
    }

    public Order save(Order order) {
        return repo.save(order);
    }
}
