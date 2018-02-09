#### Passing params to functions when passing that function to other components
:white_check_mark:
```javascript
onClick={this.switchNameHandler.bind(this, 'Other other name')}
```

:no_entry_sign:
```javascript
onClick={() => this.switchNameHandler('Roy José!')}
```

#### Enabling CSS Module

webpack.config.dev.js and webpack.config.production.js
```
loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    modules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]'
  },
```
