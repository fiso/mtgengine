"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasEngine extends Card {
  constructor(game) {
    super(game, "Urza's Engine", "Alliances", "ALL");
  }
}

module.exports = UrzasEngine;
