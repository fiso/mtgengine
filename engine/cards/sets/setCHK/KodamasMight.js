"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KodamasMight extends Card {
  constructor(game) {
    super(game, "Kodama's Might", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KodamasMight;
