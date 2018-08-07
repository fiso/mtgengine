"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InstillEnergy extends UnimplementedCard {
  constructor (game) {
    super(game, "Instill Energy", "Masters Edition IV", "ME4");
  }
}

module.exports = InstillEnergy;
