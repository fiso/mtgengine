"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BigGameHunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Big Game Hunter", "Planar Chaos", "PLC");
  }
}

module.exports = BigGameHunter;
