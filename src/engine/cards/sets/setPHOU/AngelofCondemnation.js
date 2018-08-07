"use strict";
const Constants = require ("../../../Constants");
const AngelofCondemnationBase = require("../setHOU/AngelofCondemnation");

class AngelofCondemnation extends AngelofCondemnationBase {
  constructor (game) {
    super(game, "Angel of Condemnation", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = AngelofCondemnation;
