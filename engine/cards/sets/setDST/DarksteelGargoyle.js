"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelGargoyle extends Card {
  constructor(game) {
    super(game, "Darksteel Gargoyle", "Darksteel", "DST");
  }
}

module.exports = DarksteelGargoyle;
