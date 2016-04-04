"use strict";
const Constants = require ("../../../Constants");
const RuggedHighlandsBase = require("../setFRF/RuggedHighlands");

class RuggedHighlands extends RuggedHighlandsBase {
  constructor(game) {
    super(game, "Rugged Highlands", "Khans of Tarkir", "KTK");
  }
}

module.exports = RuggedHighlands;
