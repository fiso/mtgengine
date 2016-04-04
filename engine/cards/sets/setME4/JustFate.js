"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JustFate extends Card {
  constructor(game) {
    super(game, "Just Fate", "Masters Edition IV", "ME4");
  }
}

module.exports = JustFate;
