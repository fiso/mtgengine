"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PromisedKannushi extends Card {
  constructor(game) {
    super(game, "Promised Kannushi", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = PromisedKannushi;
