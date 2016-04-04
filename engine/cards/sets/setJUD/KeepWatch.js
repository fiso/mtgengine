"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeepWatch extends Card {
  constructor(game) {
    super(game, "Keep Watch", "Judgment", "JUD");
  }
}

module.exports = KeepWatch;
