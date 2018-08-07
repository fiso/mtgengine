"use strict";
const Constants = require ("../../../Constants");
const FalkenrathNobleBase = require("../setC17/FalkenrathNoble");

class FalkenrathNoble extends FalkenrathNobleBase {
  constructor (game) {
    super(game, "Falkenrath Noble", "Innistrad", "ISD");
  }
}

module.exports = FalkenrathNoble;
