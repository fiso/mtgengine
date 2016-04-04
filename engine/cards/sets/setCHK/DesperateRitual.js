"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesperateRitual extends Card {
  constructor(game) {
    super(game, "Desperate Ritual", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DesperateRitual;
