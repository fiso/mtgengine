"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Aretopolis extends Card {
  constructor(game) {
    super(game, "Aretopolis", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Aretopolis;
