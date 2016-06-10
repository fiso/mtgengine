"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumblerofMortals extends UnimplementedCard {
  constructor (game) {
    super(game, "Humbler of Mortals", "Journey into Nyx", "JOU");
  }
}

module.exports = HumblerofMortals;
