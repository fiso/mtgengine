"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TitaniasChosen extends Card {
  constructor(game) {
    super(game, "Titania's Chosen", "Commander 2014", "C14");
  }
}

module.exports = TitaniasChosen;
