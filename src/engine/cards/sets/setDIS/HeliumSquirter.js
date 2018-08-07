"use strict";
const Constants = require ("../../../Constants");
const HeliumSquirterBase = require("../setMM2/HeliumSquirter");

class HeliumSquirter extends HeliumSquirterBase {
  constructor (game) {
    super(game, "Helium Squirter", "Dissension", "DIS");
  }
}

module.exports = HeliumSquirter;
