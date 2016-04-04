"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManorGargoyle extends Card {
  constructor(game) {
    super(game, "Manor Gargoyle", "Innistrad", "ISD");
  }
}

module.exports = ManorGargoyle;
