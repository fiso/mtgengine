"use strict";
const Constants = require ("../../../Constants");
const ProsperityBase = require("../set6ED/Prosperity");

class Prosperity extends ProsperityBase {
  constructor(game) {
    super(game, "Prosperity", "Visions", "VIS");
  }
}

module.exports = Prosperity;
