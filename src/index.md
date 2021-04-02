---
title: "Welcome!"
layout: "base.njk"
templateEngineOverride: njk,md
---

{% for post in collections.posts | sortByDate %}

  <div>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p>{{ post.data.excerpt }}</p>
  </div>
{% endfor %}