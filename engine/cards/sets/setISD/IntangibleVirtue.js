"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntangibleVirtue extends Card {
  constructor(game) {
    super(game, "Intangible Virtue", "Innistrad", "ISD");
  }
}

module.exports = IntangibleVirtue;
