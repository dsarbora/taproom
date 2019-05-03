## Taproom

#### Made by Dave Sarbora with React

## Setup

<ol>
  <li>

## Specifications

- The Taproom app opens to a homepage with name of each beer currently on the menu displayed side by side with its price per pint.
- Upon pressing the Enter button on the first page, a user will be taken to the "Bar," where they can choose to either go to the Keg management page, or see the (relatively simple) financial information for their bar.
- If the user navigates to the Keg management page by clicking on the region of the page displaying "See Kegs," they will find each keg styled into its own

## Known Bugs

- Bar component maintains its present `showing` state value when revisited from the Navbar.

## Technologies Used

- Node.js

* React
* JavaScript
* HTML
* CSS

```javascript
                     Class App
                      /      \
                 Class Bar     Home
              /            \
    Class KegControl     Class Financials
        /      |     \
AddKegForm  KegList   DeleteKeg
              /
         Class Keg
```

#### Photo Credit

Daniel Vogel on Unsplash
