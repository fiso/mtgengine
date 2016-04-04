"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkirsdagCultistBase = require("../setDDK/SkirsdagCultist.js");

class SkirsdagCultist extends SkirsdagCultistBase {
  constructor(game) {
    super(game, "Skirsdag Cultist", "Innistrad", "ISD");
  }
}

module.exports = SkirsdagCultist;
