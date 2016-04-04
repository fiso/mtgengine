"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Glaciers extends Card {
  constructor(game) {
    super(game, "Glaciers", "Ice Age", "ICE");
  }
}

module.exports = Glaciers;
