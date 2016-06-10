"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulConduit extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Conduit", "New Phyrexia", "NPH");
  }
}

module.exports = SoulConduit;
