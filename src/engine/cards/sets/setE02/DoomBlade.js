"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoomBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Doom Blade", "Explorers of Ixalan", "E02");
  }
}

module.exports = DoomBlade;
