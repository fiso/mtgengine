"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntotheFray extends Card {
  constructor(game) {
    super(game, "Into the Fray", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = IntotheFray;
