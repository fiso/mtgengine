"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BenthicExplorersBase = require("../setALL/BenthicExplorers.js");

class BenthicExplorers extends BenthicExplorersBase {
  constructor(game) {
    super(game, "Benthic Explorers", "Masters Edition III", "ME3");
  }
}

module.exports = BenthicExplorers;
