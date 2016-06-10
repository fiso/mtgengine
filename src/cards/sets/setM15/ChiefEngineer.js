"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChiefEngineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Chief Engineer", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ChiefEngineer;
