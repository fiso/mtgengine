"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThroatSlitterBase = require("../setBOK/ThroatSlitter.js");

class ThroatSlitter extends ThroatSlitterBase {
  constructor(game) {
    super(game, "Throat Slitter", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ThroatSlitter;
