"use strict";
const Constants = require ("../../../Constants");
const FalkenrathNobleBase = require("../setC17/FalkenrathNoble");

class FalkenrathNoble extends FalkenrathNobleBase {
  constructor (game) {
    super(game, "Falkenrath Noble", "Modern Masters 2017", "MM3");
  }
}

module.exports = FalkenrathNoble;
