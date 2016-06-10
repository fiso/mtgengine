"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientZiggurat extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Ziggurat", "Conflux", "CON");
  }
}

module.exports = AncientZiggurat;
