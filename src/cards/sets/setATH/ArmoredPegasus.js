"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoredPegasus extends UnimplementedCard {
  constructor (game) {
    super(game, "Armored Pegasus", "Anthologies", "ATH");
  }
}

module.exports = ArmoredPegasus;
