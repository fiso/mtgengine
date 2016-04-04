"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DestructiveFlow extends Card {
  constructor(game) {
    super(game, "Destructive Flow", "Planeshift", "PLS");
  }
}

module.exports = DestructiveFlow;
