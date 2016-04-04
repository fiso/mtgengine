"use strict";
const Constants = require ("../../../Constants");
const UpheavalBase = require("../setV14/Upheaval");

class Upheaval extends UpheavalBase {
  constructor(game) {
    super(game, "Upheaval", "Odyssey", "ODY");
  }
}

module.exports = Upheaval;
