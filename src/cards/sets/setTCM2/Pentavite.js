"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pentavite extends UnimplementedCard {
  constructor (game) {
    super(game, "Pentavite", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = Pentavite;
