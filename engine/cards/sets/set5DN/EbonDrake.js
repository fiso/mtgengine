"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EbonDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Ebon Drake", "Fifth Dawn", "5DN");
  }
}

module.exports = EbonDrake;
