'use strict';
const Constants = require('../../../Constants');
const CrawWurmBase = require('../setM10/CrawWurm');

class CrawWurm extends CrawWurmBase {
  constructor (game) {
    super(game, 'Craw Wurm', 'Unlimited Edition', '2ED');
  }
}

module.exports = CrawWurm;
