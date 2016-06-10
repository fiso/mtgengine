"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NumbingDose extends UnimplementedCard {
  constructor (game) {
    super(game, "Numbing Dose", "New Phyrexia", "NPH");
  }
}

module.exports = NumbingDose;
