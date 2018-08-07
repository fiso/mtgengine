"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Subcontract extends UnimplementedCard {
  constructor (game) {
    super(game, "Subcontract", "Unstable", "UST");
  }
}

module.exports = Subcontract;
