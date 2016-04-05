"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinalParasite extends UnimplementedCard {
  constructor(game) {
    super(game, "Spinal Parasite", "Fifth Dawn", "5DN");
  }
}

module.exports = SpinalParasite;
