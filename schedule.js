
const {eat, arcticle, manual} = require('./schedule-job');

eat('2 50 11 * * *');
arcticle('2 25 11 * * *');
manual('30 44 11 * * *', '你才哑巴呢');