"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShriekRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Shriek Raptor", "New Phyrexia", "NPH");
  }
}

module.exports = ShriekRaptor;
