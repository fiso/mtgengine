"use strict";
const Constants = require ("../../../Constants");
const DayoftheDragonsBase = require("../setIMA/DayoftheDragons");

class DayoftheDragons extends DayoftheDragonsBase {
  constructor (game) {
    super(game, "Day of the Dragons", "Scourge", "SCG");
  }
}

module.exports = DayoftheDragons;
