"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rethink extends Card {
  constructor(game) {
    super(game, "Rethink", "Prophecy", "PCY");
  }
}

module.exports = Rethink;
