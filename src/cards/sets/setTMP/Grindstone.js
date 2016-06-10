"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Grindstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Grindstone", "Tempest", "TMP");
  }
}

module.exports = Grindstone;
