"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VitalSurge extends UnimplementedCard {
  constructor (game) {
    super(game, "Vital Surge", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = VitalSurge;
