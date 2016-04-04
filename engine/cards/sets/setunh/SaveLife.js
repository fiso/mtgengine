"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SaveLife extends Card {
  constructor(game) {
    super(game, "Save Life", "Unhinged", "UNH");
  }
}

module.exports = SaveLife;
