"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NettleSwine extends UnimplementedCard {
  constructor(game) {
    super(game, "Nettle Swine", "Avacyn Restored", "AVR");
  }
}

module.exports = NettleSwine;
