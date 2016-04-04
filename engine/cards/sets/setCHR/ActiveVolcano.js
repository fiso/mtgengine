"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ActiveVolcano extends Card {
  constructor(game) {
    super(game, "Active Volcano", "Chronicles", "CHR");
  }
}

module.exports = ActiveVolcano;
