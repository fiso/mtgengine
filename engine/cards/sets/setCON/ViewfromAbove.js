"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViewfromAbove extends Card {
  constructor(game) {
    super(game, "View from Above", "Conflux", "CON");
  }
}

module.exports = ViewfromAbove;
