"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SternProctor extends Card {
  constructor(game) {
    super(game, "Stern Proctor", "Urza's Saga", "USG");
  }
}

module.exports = SternProctor;
