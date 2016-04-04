"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WellgabberApothecary extends Card {
  constructor(game) {
    super(game, "Wellgabber Apothecary", "Lorwyn", "LRW");
  }
}

module.exports = WellgabberApothecary;
