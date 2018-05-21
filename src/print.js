import _ from 'lodash';

export default function printMe() {
	console.log(_.join([1,2], '&'));
    console.log('I get called from print.js!sss');

    
}

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

export function test() {
    console.log('I get called from print.js!');
}