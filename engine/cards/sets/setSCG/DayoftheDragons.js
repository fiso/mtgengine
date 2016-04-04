"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DayoftheDragonsBase = require("../setC15/DayoftheDragons.js");

class DayoftheDragons extends DayoftheDragonsBase {
  constructor(game) {
    super(game, "Day of the Dragons", "Scourge", "SCG");
  }
}

module.exports = DayoftheDragons;
