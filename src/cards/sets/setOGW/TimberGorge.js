"use strict";
const Constants = require ("../../../Constants");
const TimberGorgeBase = require("../setM19/TimberGorge");

class TimberGorge extends TimberGorgeBase {
  constructor (game) {
    super(game, "Timber Gorge", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = TimberGorge;
