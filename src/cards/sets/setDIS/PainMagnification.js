"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PainMagnification extends UnimplementedCard {
  constructor(game) {
    super(game, "Pain Magnification", "Dissension", "DIS");
  }
}

module.exports = PainMagnification;
