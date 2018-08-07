"use strict";
const Constants = require ("../../../Constants");
const PreyseizerDragonBase = require("../setPCA/PreyseizerDragon");

class PreyseizerDragon extends PreyseizerDragonBase {
  constructor (game) {
    super(game, "Preyseizer Dragon", "Planechase 2012", "PC2");
  }
}

module.exports = PreyseizerDragon;
