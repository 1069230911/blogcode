# 进阶

## 简易版 Promise
```js
# pendding 状态只能改变一次  // TODO
# resolve 方法可能在异步中执行  // TODO
class myPromise {
  static this.pendding = 'pendding';
  this.result = null;
  constructor( cb ) {
    this.resolve = value => {
      if( this.pendding !== 'pendding' ) retrun void;

      this.result = value;
      this.pendding = 'resolve';
    };

    this.reject = value => {
      if( this.pendding !== 'pendding' ) retrun void;

      this.result = value;
      this.pendding = 'reject';
    }

    cb && cb( this.resolve, this.reject );
  }

  then( cb ) {
    this.pendding === 'resolve' && cb( this.result )；
    return this;
  };

  catch( cb ) {
    this.pendding === 'reject' && cb( this.result );
    return this;
  };

  finally( cb ) {
    cb()
  };

  static all(ary) {

  };

  static race() {}
}
```