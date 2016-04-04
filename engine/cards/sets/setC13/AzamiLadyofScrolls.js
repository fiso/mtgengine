"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzamiLadyofScrollsBase = require("../setCHK/AzamiLadyofScrolls.js");

class AzamiLadyofScrolls extends AzamiLadyofScrollsBase {
  constructor(game) {
    super(game, "Azami, Lady of Scrolls", "Commander 2013 Edition", "C13");
  }
}

module.exports = AzamiLadyofScrolls;
