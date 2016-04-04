"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rescind extends Card {
  constructor(game) {
    super(game, "Rescind", "Urza's Saga", "USG");
  }
}

module.exports = Rescind;
