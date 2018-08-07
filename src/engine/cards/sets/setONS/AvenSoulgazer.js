"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenSoulgazer extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Soulgazer", "Onslaught", "ONS");
  }
}

module.exports = AvenSoulgazer;
