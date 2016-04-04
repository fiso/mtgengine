"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmoredAscensionBase = require("../setM10/ArmoredAscension.js");

class ArmoredAscension extends ArmoredAscensionBase {
  constructor(game) {
    super(game, "Armored Ascension", "Shadowmoor", "SHM");
  }
}

module.exports = ArmoredAscension;
