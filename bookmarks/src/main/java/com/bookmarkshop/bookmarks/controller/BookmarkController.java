package com.bookmarkshop.bookmarks.controller;

import com.bookmarkshop.bookmarks.model.Bookmark;
import com.bookmarkshop.bookmarks.repository.BookmarkRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookmarks")
@CrossOrigin
public class BookmarkController {

    @Autowired
    private BookmarkRepository repo;

    @GetMapping
    public List<Bookmark> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Bookmark save(@RequestBody Bookmark bookmark) {
        return repo.save(bookmark);
    }
}
