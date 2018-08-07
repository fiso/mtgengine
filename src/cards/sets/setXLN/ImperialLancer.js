"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperialLancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Imperial Lancer", "Ixalan", "XLN");
  }
}

module.exports = ImperialLancer;
