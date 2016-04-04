"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stensia extends Card {
  constructor(game) {
    super(game, "Stensia", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Stensia;
