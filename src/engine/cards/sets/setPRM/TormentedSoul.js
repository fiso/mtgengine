"use strict";
const Constants = require ("../../../Constants");
const TormentedSoulBase = require("../setPCA/TormentedSoul");

class TormentedSoul extends TormentedSoulBase {
  constructor (game) {
    super(game, "Tormented Soul", "Magic Online Promos", "PRM");
  }
}

module.exports = TormentedSoul;
