"use strict";
const Constants = require ("../../../Constants");
const TormentedSoulBase = require("../setM12/TormentedSoul");

class TormentedSoul extends TormentedSoulBase {
  constructor(game) {
    super(game, "Tormented Soul", "WPN and Gateway", "pWPN");
  }
}

module.exports = TormentedSoul;
