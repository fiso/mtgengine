"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecrogenMists extends Card {
  constructor(game) {
    super(game, "Necrogen Mists", "Mirrodin", "MRD");
  }
}

module.exports = NecrogenMists;
