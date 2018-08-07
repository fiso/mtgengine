"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhiteShieldCrusader extends UnimplementedCard {
  constructor (game) {
    super(game, "White Shield Crusader", "Coldsnap", "CSP");
  }
}

module.exports = WhiteShieldCrusader;
