"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Endoskeleton extends Card {
  constructor(game) {
    super(game, "Endoskeleton", "Urza's Saga", "USG");
  }
}

module.exports = Endoskeleton;
