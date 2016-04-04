"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PradeshGypsiesBase = require("../set6ED/PradeshGypsies.js");

class PradeshGypsies extends PradeshGypsiesBase {
  constructor(game) {
    super(game, "Pradesh Gypsies", "Fourth Edition", "4ED");
  }
}

module.exports = PradeshGypsies;
