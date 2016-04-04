"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TomorrowAzamisFamiliar extends Card {
  constructor(game) {
    super(game, "Tomorrow, Azami's Familiar", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TomorrowAzamisFamiliar;
