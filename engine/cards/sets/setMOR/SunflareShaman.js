"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunflareShaman extends Card {
  constructor(game) {
    super(game, "Sunflare Shaman", "Morningtide", "MOR");
  }
}

module.exports = SunflareShaman;
