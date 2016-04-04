"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TendoIceBridge extends Card {
  constructor(game) {
    super(game, "Tendo Ice Bridge", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TendoIceBridge;
