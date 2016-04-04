"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrchardWarden extends Card {
  constructor(game) {
    super(game, "Orchard Warden", "Morningtide", "MOR");
  }
}

module.exports = OrchardWarden;
