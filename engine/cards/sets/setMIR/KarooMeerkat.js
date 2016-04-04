"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarooMeerkat extends UnimplementedCard {
  constructor(game) {
    super(game, "Karoo Meerkat", "Mirage", "MIR");
  }
}

module.exports = KarooMeerkat;
