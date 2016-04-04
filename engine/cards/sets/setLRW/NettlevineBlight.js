"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NettlevineBlight extends Card {
  constructor(game) {
    super(game, "Nettlevine Blight", "Lorwyn", "LRW");
  }
}

module.exports = NettlevineBlight;
