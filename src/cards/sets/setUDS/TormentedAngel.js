"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TormentedAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Tormented Angel", "Urza's Destiny", "UDS");
  }
}

module.exports = TormentedAngel;
