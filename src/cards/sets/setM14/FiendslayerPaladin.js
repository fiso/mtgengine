"use strict";
const Constants = require ("../../../Constants");
const FiendslayerPaladinBase = require("../setE01/FiendslayerPaladin");

class FiendslayerPaladin extends FiendslayerPaladinBase {
  constructor (game) {
    super(game, "Fiendslayer Paladin", "Magic 2014", "M14");
  }
}

module.exports = FiendslayerPaladin;
