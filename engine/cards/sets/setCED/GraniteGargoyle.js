"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraniteGargoyle extends Card {
  constructor(game) {
    super(game, "Granite Gargoyle", "Collector's Edition", "CED");
  }
}

module.exports = GraniteGargoyle;
