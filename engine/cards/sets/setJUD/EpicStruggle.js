"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EpicStruggle extends Card {
  constructor(game) {
    super(game, "Epic Struggle", "Judgment", "JUD");
  }
}

module.exports = EpicStruggle;
