---
layout: base.njk
title: education
---

<div class="gallery">

{% assign educationCollection = collections.education | sort: "data.educationOrder" | reverse %}

{%- for education in educationCollection -%}
  <div class="gallery-item">
    <a href="{{ education.url }}">
    <img 
      src="{{ education.data.thumbnail }}" 
      alt="{{ education.data.thumbnailAlt }}"
      loading="lazy"
      decoding="async"
      style="aspect-ratio: 140/933; max-width: 100%; height: auto"
      width="140"
      height="933"
    /> 
    <div class="caption">
      <h2><span class="title">{{ education.data.title }}</span></h2>
    </div>
    </a>
  </div>
  {%- endfor -%}

</div>
