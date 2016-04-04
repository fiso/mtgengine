"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrabenGargoyle extends Card {
  constructor(game) {
    super(game, "Thraben Gargoyle", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ThrabenGargoyle;
