"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrageofExpendables extends Card {
  constructor(game) {
    super(game, "Barrage of Expendables", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BarrageofExpendables;
