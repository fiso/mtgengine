"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoomBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Doom Blade", "Magic 2010", "M10");
  }
}

module.exports = DoomBlade;
