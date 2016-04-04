"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FyndhornDruid extends Card {
  constructor(game) {
    super(game, "Fyndhorn Druid", "Alliances", "ALL");
  }
}

module.exports = FyndhornDruid;
