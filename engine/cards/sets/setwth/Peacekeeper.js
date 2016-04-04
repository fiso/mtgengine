"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Peacekeeper extends Card {
  constructor(game) {
    super(game, "Peacekeeper", "Weatherlight", "WTH");
  }
}

module.exports = Peacekeeper;
