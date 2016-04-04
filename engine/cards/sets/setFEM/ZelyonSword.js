"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZelyonSword extends Card {
  constructor(game) {
    super(game, "Zelyon Sword", "Fallen Empires", "FEM");
  }
}

module.exports = ZelyonSword;
