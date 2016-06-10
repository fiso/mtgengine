"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Frost Raptor", "Coldsnap", "CSP");
  }
}

module.exports = FrostRaptor;
