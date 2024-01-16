User stories
1. See all hog cards with name and image on load
    -"ui grid container" on parent of cards
    -"ui eight wide column" on children
2. Click a hog and see more details
    -component called HogDetail which will be conditionally rendered as a child of HogTile component
3. Click a checkbox that will enable a 'greased' filter
4. Select a dropdown that will sort the hog list by name or weight

Component Tree
-App (state of hogs, filter, sort)
    -Nav (rename to Header?)
    -Filter(events: update filter and sort on App)
    -HogList(props: filters and/or sorted list of hogs)
        -HogTile*(toggledetail)
            -HogDetail*
data shape
```js
{
    name: "Babe",
    specialty: "Being incredibly cute",
    greased: false,
    weight: 2.0,
    "highest medal achieved": "bronze",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
  },```