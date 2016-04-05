"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoolsDemise extends UnimplementedCard {
  constructor(game) {
    super(game, "Fool's Demise", "Commander 2014", "C14");
  }
}

module.exports = FoolsDemise;
