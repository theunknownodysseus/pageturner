package com.bookmarkshop.bookmarks.controller;

import com.bookmarkshop.bookmarks.model.Order;
import com.bookmarkshop.bookmarks.service.OrderService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {

    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return service.save(order);
    }
}
