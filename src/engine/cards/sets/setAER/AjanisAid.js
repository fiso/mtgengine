"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjanisAid extends UnimplementedCard {
  constructor (game) {
    super(game, "Ajani's Aid", "Aether Revolt", "AER");
  }
}

module.exports = AjanisAid;
