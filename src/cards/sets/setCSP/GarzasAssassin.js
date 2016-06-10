"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarzasAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Garza's Assassin", "Coldsnap", "CSP");
  }
}

module.exports = GarzasAssassin;
