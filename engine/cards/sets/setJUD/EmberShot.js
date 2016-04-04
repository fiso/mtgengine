"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmberShot extends Card {
  constructor(game) {
    super(game, "Ember Shot", "Judgment", "JUD");
  }
}

module.exports = EmberShot;
