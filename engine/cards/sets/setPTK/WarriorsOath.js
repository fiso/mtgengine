"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarriorsOath extends Card {
  constructor(game) {
    super(game, "Warrior's Oath", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WarriorsOath;
