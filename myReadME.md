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

### Pure Components
They automatically perform deep checks on componentShouldUpdate to avoid rework.
You use if you know that updates may not be required. On the other hand, you have components which might only depend on one or two props and you know whenever updates are triggered for this component I want to update it because maybe I've got a couple of pure components at top positions in this component tree which prevent the updating of any child component anyways.
You can get performance hit due to constant state/props comparisons.
Having some containers with PureComponents may be a good idea.

### High order components
They are not representational, but they wrap other components to add a certain functionality.
