"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TolarianAcademy extends Card {
  constructor(game) {
    super(game, "Tolarian Academy", "Urza's Saga", "USG");
  }
}

module.exports = TolarianAcademy;
