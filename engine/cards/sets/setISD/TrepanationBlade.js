"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrepanationBlade extends Card {
  constructor(game) {
    super(game, "Trepanation Blade", "Innistrad", "ISD");
  }
}

module.exports = TrepanationBlade;
