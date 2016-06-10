"use strict";
const Constants = require ("../../../Constants");
const ArmoredAscensionBase = require("../setM10/ArmoredAscension");

class ArmoredAscension extends ArmoredAscensionBase {
  constructor (game) {
    super(game, "Armored Ascension", "Magic 2011", "M11");
  }
}

module.exports = ArmoredAscension;
