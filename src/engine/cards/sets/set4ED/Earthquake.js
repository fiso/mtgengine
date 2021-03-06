'use strict';
const Constants = require('../../../Constants');
const EarthquakeBase = require('../setCM2/Earthquake');

class Earthquake extends EarthquakeBase {
  constructor (game) {
    super(game, 'Earthquake', 'Fourth Edition', '4ED');
  }
}

module.exports = Earthquake;
