"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesperateStand extends Card {
  constructor(game) {
    super(game, "Desperate Stand", "Journey into Nyx", "JOU");
  }
}

module.exports = DesperateStand;
