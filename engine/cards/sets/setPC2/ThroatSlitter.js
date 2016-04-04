"use strict";
const Constants = require ("../../../Constants");
const ThroatSlitterBase = require("../setBOK/ThroatSlitter");

class ThroatSlitter extends ThroatSlitterBase {
  constructor(game) {
    super(game, "Throat Slitter", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ThroatSlitter;
