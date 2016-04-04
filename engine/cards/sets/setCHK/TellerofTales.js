"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TellerofTales extends Card {
  constructor(game) {
    super(game, "Teller of Tales", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TellerofTales;
