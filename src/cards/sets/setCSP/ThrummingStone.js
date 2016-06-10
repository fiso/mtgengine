"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrummingStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrumming Stone", "Coldsnap", "CSP");
  }
}

module.exports = ThrummingStone;
