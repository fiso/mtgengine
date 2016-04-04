"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NacatlOutlander extends Card {
  constructor(game) {
    super(game, "Nacatl Outlander", "Conflux", "CON");
  }
}

module.exports = NacatlOutlander;
