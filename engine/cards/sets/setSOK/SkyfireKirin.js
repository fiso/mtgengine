"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyfireKirin extends Card {
  constructor(game) {
    super(game, "Skyfire Kirin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SkyfireKirin;
