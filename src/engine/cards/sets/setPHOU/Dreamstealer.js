"use strict";
const Constants = require ("../../../Constants");
const DreamstealerBase = require("../setHOU/Dreamstealer");

class Dreamstealer extends DreamstealerBase {
  constructor (game) {
    super(game, "Dreamstealer", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = Dreamstealer;
