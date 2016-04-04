"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SejiriSteppeBase = require("../setDDG/SejiriSteppe.js");

class SejiriSteppe extends SejiriSteppeBase {
  constructor(game) {
    super(game, "Sejiri Steppe", "Worldwake", "WWK");
  }
}

module.exports = SejiriSteppe;
