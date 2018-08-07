"use strict";
const Constants = require ("../../../Constants");
const ThroatSlitterBase = require("../setPCA/ThroatSlitter");

class ThroatSlitter extends ThroatSlitterBase {
  constructor (game) {
    super(game, "Throat Slitter", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ThroatSlitter;
