"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildOx extends Card {
  constructor(game) {
    super(game, "Wild Ox", "Masters Edition IV", "ME4");
  }
}

module.exports = WildOx;
