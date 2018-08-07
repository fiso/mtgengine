"use strict";
const Constants = require ("../../../Constants");
const BenthicExplorersBase = require("../setME3/BenthicExplorers");

class BenthicExplorers extends BenthicExplorersBase {
  constructor (game) {
    super(game, "Benthic Explorers", "Alliances", "ALL");
  }
}

module.exports = BenthicExplorers;
