"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Exile extends Card {
  constructor(game) {
    super(game, "Exile", "Alliances", "ALL");
  }
}

module.exports = Exile;
