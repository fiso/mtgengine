"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunkenHope extends Card {
  constructor(game) {
    super(game, "Sunken Hope", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SunkenHope;
