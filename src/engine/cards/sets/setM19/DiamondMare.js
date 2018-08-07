"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiamondMare extends UnimplementedCard {
  constructor (game) {
    super(game, "Diamond Mare", "Core Set 2019", "M19");
  }
}

module.exports = DiamondMare;
