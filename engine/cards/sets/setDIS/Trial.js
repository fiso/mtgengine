"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Trial extends Card {
  constructor(game) {
    super(game, "Trial", "Dissension", "DIS");
  }
}

module.exports = Trial;
