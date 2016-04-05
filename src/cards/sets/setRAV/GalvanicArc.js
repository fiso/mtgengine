"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GalvanicArc extends UnimplementedCard {
  constructor(game) {
    super(game, "Galvanic Arc", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GalvanicArc;
