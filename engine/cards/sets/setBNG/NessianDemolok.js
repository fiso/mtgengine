"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NessianDemolok extends Card {
  constructor(game) {
    super(game, "Nessian Demolok", "Born of the Gods", "BNG");
  }
}

module.exports = NessianDemolok;
