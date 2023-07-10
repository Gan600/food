import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  image1 = '..\assets\image/cspback.jpg';
  image2 = 'https://example.com/image2.jpg';

  constructor() { }

  ngOnInit(): void {
    this.createContent();
  }

  createContent(): void {
    const contentContainer = document.querySelector('.content-container');

    if (contentContainer) {
      const section1 = this.createSection('About Food Wastage', 'Food wastage is a significant global issue that has serious environmental, social, and economic implications. It refers to the discarding or wasteful use of edible food, whether at the production, processing, distribution, or consumption stages.');
      const image1Link = this.createImageLink(this.image1, 'Image 1');
      const image1 = this.createImage(this.image1);
      image1Link.appendChild(image1);
      section1.appendChild(image1Link);
      contentContainer.appendChild(section1);

      const section2 = this.createSection('Causes of Food Wastage', 'There are several causes of food wastage, including:');
      const causesList = this.createList(['Overproduction and excess inventory', 'Poor storage and inadequate infrastructure', 'Improper handling and transportation', 'Consumer behavior and food purchasing habits']);
      section2.appendChild(causesList);
      contentContainer.appendChild(section2);

      const section3 = this.createSection('Impacts of Food Wastage', 'Food wastage has far-reaching consequences:');
      const impactsList = this.createList(['Environmental impact: Wasted food contributes to greenhouse gas emissions and exacerbates climate change. It also wastes valuable resources like water, energy, and land.', 'Social impact: Food wastage perpetuates hunger and food insecurity, with millions of people worldwide lacking access to nutritious meals.', 'Economic impact: Food wastage represents a significant economic loss for individuals, businesses, and governments, impacting food prices and overall economic stability.']);
      section3.appendChild(impactsList);
      contentContainer.appendChild(section3);

      const section4 = this.createSection('Solutions and Actions', 'Addressing food wastage requires collective efforts and various strategies:');
      const solutionsList = this.createList(['Reduce: Promote mindful consumption, plan meals, and avoid overbuying.', 'Reuse: Utilize leftovers creatively, repurpose ingredients, and minimize food scraps.', 'Donate: Support food banks, charities, and community organizations by donating excess food.', 'Compost: Properly manage food waste through composting, reducing landfill burden and creating nutrient-rich soil.', 'Educate: Raise awareness about food wastage and its consequences through campaigns, workshops, and educational programs.']);
      section4.appendChild(solutionsList);
      contentContainer.appendChild(section4);
    }
  }

  createSection(title: string, content: string): HTMLDivElement {
    const section = document.createElement('div');
    section.classList.add('section');

    const heading = document.createElement('h1');
    heading.textContent = title;
    section.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    section.appendChild(paragraph);

    return section;
  }

  createImageLink(url: string, alt: string): HTMLAnchorElement {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';

    const image = document.createElement('img');
    image.src = url;
    image.alt = alt;
    image.classList.add('section-image');

    link.appendChild(image);
    return link;
  }

  createImage(url: string): HTMLImageElement {
    const image = document.createElement('img');
    image.src = url;
    image.classList.add('section-image');
    return image;
  }

  createList(items: string[]): HTMLUListElement {
    const list = document.createElement('ul');
    items.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    });
    return list;
  }

}
