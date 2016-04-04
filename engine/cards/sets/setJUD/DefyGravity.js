"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefyGravity extends Card {
  constructor(game) {
    super(game, "Defy Gravity", "Judgment", "JUD");
  }
}

module.exports = DefyGravity;
