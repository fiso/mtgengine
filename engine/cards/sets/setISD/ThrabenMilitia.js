"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrabenMilitia extends Card {
  constructor(game) {
    super(game, "Thraben Militia", "Innistrad", "ISD");
  }
}

module.exports = ThrabenMilitia;
