"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildGriffin extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Griffin", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = WildGriffin;
