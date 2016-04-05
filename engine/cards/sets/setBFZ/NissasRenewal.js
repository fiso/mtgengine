"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissasRenewal extends UnimplementedCard {
  constructor(game) {
    super(game, "Nissa's Renewal", "Battle for Zendikar", "BFZ");
  }
}

module.exports = NissasRenewal;
