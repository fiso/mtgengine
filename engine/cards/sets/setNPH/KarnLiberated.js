"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarnLiberatedBase = require("../setMM2/KarnLiberated.js");

class KarnLiberated extends KarnLiberatedBase {
  constructor(game) {
    super(game, "Karn Liberated", "New Phyrexia", "NPH");
  }
}

module.exports = KarnLiberated;
