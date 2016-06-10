"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JetMedallion extends UnimplementedCard {
  constructor (game) {
    super(game, "Jet Medallion", "Commander 2014", "C14");
  }
}

module.exports = JetMedallion;
