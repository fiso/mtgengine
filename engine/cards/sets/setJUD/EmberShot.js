"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberShot extends UnimplementedCard {
  constructor(game) {
    super(game, "Ember Shot", "Judgment", "JUD");
  }
}

module.exports = EmberShot;
