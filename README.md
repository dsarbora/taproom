## Taproom

#### Made by Dave Sarbora with React

## Setup


## Specifications

- The Taproom app opens to a homepage with name of each beer currently on the menu displayed side by side with its price per pint.
- Upon pressing the Enter button on the first page, a user will be taken to the "Bar," where they can choose to either go to the Keg management page, or see the (relatively simple) financial information for their bar.
- If the user navigates to the Keg management page by clicking on the region of the page displaying "See Kegs," they will find each keg styled into its own

## Known Bugs

- After a Keg is added, the global financial state of the bar becomes undefined
- Navigating to the Bar from the top Navbar will not automatically show the Bar's homepage, but will simply navigate to the last page within the Bar component that the user has visited. So if a user is viewing financial information for the bar, and tries to navigate to the "Bar" from the top menu, nothing will change. This is because which page is showing in the bar is dependent on the state, which is not changed from the Navbar.

## Technologies Used

* Node.js
- React
- JavaScript
- HTML
- CSS

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
