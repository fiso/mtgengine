"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WretchedAnurid extends Card {
  constructor(game) {
    super(game, "Wretched Anurid", "Onslaught", "ONS");
  }
}

module.exports = WretchedAnurid;
