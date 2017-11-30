#### Passing params to functions when passing that function to other components
:white_check_mark:
```javascript
onClick={this.switchNameHandler.bind(this, 'Other other name')}
```

:no_entry_sign:
```javascript
onClick={() => this.switchNameHandler('Roy José!')}
```
