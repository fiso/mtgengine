"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InnocentBloodBase = require("../setODY/InnocentBlood.js");

class InnocentBlood extends InnocentBloodBase {
  constructor(game) {
    super(game, "Innocent Blood", "Planechase", "HOP");
  }
}

module.exports = InnocentBlood;
