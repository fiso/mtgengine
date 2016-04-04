"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Clear extends Card {
  constructor(game) {
    super(game, "Clear", "Urza's Saga", "USG");
  }
}

module.exports = Clear;
