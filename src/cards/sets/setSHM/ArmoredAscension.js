"use strict";
const Constants = require ("../../../Constants");
const ArmoredAscensionBase = require("../setM11/ArmoredAscension");

class ArmoredAscension extends ArmoredAscensionBase {
  constructor (game) {
    super(game, "Armored Ascension", "Shadowmoor", "SHM");
  }
}

module.exports = ArmoredAscension;
