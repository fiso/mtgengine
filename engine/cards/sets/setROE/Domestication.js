"use strict";
const Constants = require ("../../../Constants");
const DomesticationBase = require("../setM14/Domestication");

class Domestication extends DomesticationBase {
  constructor(game) {
    super(game, "Domestication", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Domestication;
