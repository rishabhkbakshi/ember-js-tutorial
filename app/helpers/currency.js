// Function based helper
// import { helper } from '@ember/component/helper';

// export default helper(function currency(positional, named = {}) {
//   const [number] = positional;
//   const { sign = '₹' } = named;

//   return `${sign}${number}`;
// });

// class base helper

import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(positional, named = {}) {
    const [number] = positional;
    const { sign = '₹' } = named;

    return `${sign}${number}`;
  }
}
