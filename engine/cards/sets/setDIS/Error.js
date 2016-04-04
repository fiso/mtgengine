"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Error extends Card {
  constructor(game) {
    super(game, "Error", "Dissension", "DIS");
  }
}

module.exports = Error;
