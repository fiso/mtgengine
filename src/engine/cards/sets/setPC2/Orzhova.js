"use strict";
const Constants = require ("../../../Constants");
const OrzhovaBase = require("../setPCA/Orzhova");

class Orzhova extends OrzhovaBase {
  constructor (game) {
    super(game, "Orzhova", "Planechase 2012", "PC2");
  }
}

module.exports = Orzhova;
