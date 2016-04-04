"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FalkenrathNobleBase = require("../setDDQ/FalkenrathNoble.js");

class FalkenrathNoble extends FalkenrathNobleBase {
  constructor(game) {
    super(game, "Falkenrath Noble", "Innistrad", "ISD");
  }
}

module.exports = FalkenrathNoble;
