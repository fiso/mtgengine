"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HystericalBlindness extends UnimplementedCard {
  constructor(game) {
    super(game, "Hysterical Blindness", "Innistrad", "ISD");
  }
}

module.exports = HystericalBlindness;
