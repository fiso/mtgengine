"use strict";
const Constants = require ("../../../Constants");
const TormentedSoulBase = require("../setPCA/TormentedSoul");

class TormentedSoul extends TormentedSoulBase {
  constructor (game) {
    super(game, "Tormented Soul", "Planechase 2012", "PC2");
  }
}

module.exports = TormentedSoul;
