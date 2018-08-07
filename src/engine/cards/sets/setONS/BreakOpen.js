"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreakOpen extends UnimplementedCard {
  constructor (game) {
    super(game, "Break Open", "Onslaught", "ONS");
  }
}

module.exports = BreakOpen;
