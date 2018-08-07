"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RighteousWar extends UnimplementedCard {
  constructor (game) {
    super(game, "Righteous War", "Visions", "VIS");
  }
}

module.exports = RighteousWar;
