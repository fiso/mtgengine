"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BroodofCockroaches extends Card {
  constructor(game) {
    super(game, "Brood of Cockroaches", "Visions", "VIS");
  }
}

module.exports = BroodofCockroaches;
