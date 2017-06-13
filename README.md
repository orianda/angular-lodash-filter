# Angular download attribute

AngularJS (v1) filter wrapper for the lodash library.

Provides filter namespace to access lodash functionality in angular templates by using it as a filter. 

## Install

```bash
bower install --save angular-lodash-filter
```

Depends on lodash. Install your favorite version of lodash.

```bash
bower install --save lodash
```

## Usage
 
```html
<div ng-class="{enabled: list | lodash: 'some': {name: 'wanted'} }">here I am</div>
```

```html
<div ng-repeat="item in list | lodash: 'filter': {type: 'wanted', color: 'blue', nested: {value: 'supported'} }"
```
