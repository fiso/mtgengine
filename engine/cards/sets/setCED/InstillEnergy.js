"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InstillEnergy extends UnimplementedCard {
  constructor(game) {
    super(game, "Instill Energy", "Collector's Edition", "CED");
  }
}

module.exports = InstillEnergy;
