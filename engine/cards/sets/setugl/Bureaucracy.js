"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bureaucracy extends Card {
  constructor(game) {
    super(game, "Bureaucracy", "Unglued", "UGL");
  }
}

module.exports = Bureaucracy;
