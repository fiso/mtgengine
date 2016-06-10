"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrageofExpendables extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrage of Expendables", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BarrageofExpendables;
