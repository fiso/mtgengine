"use strict";
const Constants = require ("../../../Constants");
const ThroatSlitterBase = require("../setPCA/ThroatSlitter");

class ThroatSlitter extends ThroatSlitterBase {
  constructor (game) {
    super(game, "Throat Slitter", "Planechase 2012", "PC2");
  }
}

module.exports = ThroatSlitter;
