"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TormentedAngel extends Card {
  constructor(game) {
    super(game, "Tormented Angel", "Urza's Destiny", "UDS");
  }
}

module.exports = TormentedAngel;
