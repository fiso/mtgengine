"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrumpetingArmodonBase = require("../setBRB/TrumpetingArmodon.js");

class TrumpetingArmodon extends TrumpetingArmodonBase {
  constructor(game) {
    super(game, "Trumpeting Armodon", "Tempest", "TMP");
  }
}

module.exports = TrumpetingArmodon;
