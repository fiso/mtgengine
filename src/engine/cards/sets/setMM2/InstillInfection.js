"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InstillInfection extends UnimplementedCard {
  constructor (game) {
    super(game, "Instill Infection", "Modern Masters 2015", "MM2");
  }
}

module.exports = InstillInfection;
