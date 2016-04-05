"use strict";
const Constants = require ("../../../Constants");
const TormentedSoulBase = require("../setM12/TormentedSoul");

class TormentedSoul extends TormentedSoulBase {
  constructor(game) {
    super(game, "Tormented Soul", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TormentedSoul;
