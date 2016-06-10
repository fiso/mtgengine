"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistbladeShinobi extends UnimplementedCard {
  constructor (game) {
    super(game, "Mistblade Shinobi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MistbladeShinobi;
