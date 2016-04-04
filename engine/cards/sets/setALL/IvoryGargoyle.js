"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IvoryGargoyle extends Card {
  constructor(game) {
    super(game, "Ivory Gargoyle", "Alliances", "ALL");
  }
}

module.exports = IvoryGargoyle;
