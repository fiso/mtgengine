"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NimGrotesque extends Card {
  constructor(game) {
    super(game, "Nim Grotesque", "Fifth Dawn", "5DN");
  }
}

module.exports = NimGrotesque;
