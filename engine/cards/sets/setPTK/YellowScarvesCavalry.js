"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YellowScarvesCavalry extends Card {
  constructor(game) {
    super(game, "Yellow Scarves Cavalry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = YellowScarvesCavalry;
