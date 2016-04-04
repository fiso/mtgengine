"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EverbarkShaman extends Card {
  constructor(game) {
    super(game, "Everbark Shaman", "Morningtide", "MOR");
  }
}

module.exports = EverbarkShaman;
