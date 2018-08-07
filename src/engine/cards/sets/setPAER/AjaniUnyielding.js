"use strict";
const Constants = require ("../../../Constants");
const AjaniUnyieldingBase = require("../setAER/AjaniUnyielding");

class AjaniUnyielding extends AjaniUnyieldingBase {
  constructor (game) {
    super(game, "Ajani Unyielding", "Aether Revolt Promos", "PAER");
  }
}

module.exports = AjaniUnyielding;
