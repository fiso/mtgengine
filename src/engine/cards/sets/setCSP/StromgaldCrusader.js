"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromgaldCrusader extends UnimplementedCard {
  constructor (game) {
    super(game, "Stromgald Crusader", "Coldsnap", "CSP");
  }
}

module.exports = StromgaldCrusader;
