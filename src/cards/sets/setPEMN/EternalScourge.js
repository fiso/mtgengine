"use strict";
const Constants = require ("../../../Constants");
const EternalScourgeBase = require("../setEMN/EternalScourge");

class EternalScourge extends EternalScourgeBase {
  constructor (game) {
    super(game, "Eternal Scourge", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = EternalScourge;
