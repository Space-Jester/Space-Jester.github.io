---
layout: base.njk
title: personal
---

<div class="gallery">

{% assign personalCollection = collections.personal | sort: "data.personalOrder" | reverse %}

{%- for personal in personalCollection -%}
  <div class="gallery-item">
    <a href="{{ personal.url }}">
    <img 
      src="{{ personal.data.thumbnail }}" 
      alt="{{ personal.data.thumbnailAlt }}"
      loading="lazy"
      decoding="async"
      style="aspect-ratio: 1440/1033; max-width: 100%; height: auto"
      width="1440"
      height="1033"
    /> 
    <div class="caption">
      <h2><span class="title">{{ personal.data.title }}</span></h2>
    </div>
    </a>
  </div>
  {%- endfor -%}

</div>
