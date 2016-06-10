"use strict";
const Constants = require ("../../../Constants");
const BenthicExplorersBase = require("../setALL/BenthicExplorers");

class BenthicExplorers extends BenthicExplorersBase {
  constructor (game) {
    super(game, "Benthic Explorers", "Masters Edition III", "ME3");
  }
}

module.exports = BenthicExplorers;
