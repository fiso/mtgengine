"use strict";
const Constants = require ("../../../Constants");
const ArmoredAscensionBase = require("../setM11/ArmoredAscension");

class ArmoredAscension extends ArmoredAscensionBase {
  constructor (game) {
    super(game, "Armored Ascension", "Magic 2010", "M10");
  }
}

module.exports = ArmoredAscension;
