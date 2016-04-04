"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CustodyBattle extends Card {
  constructor(game) {
    super(game, "Custody Battle", "Onslaught", "ONS");
  }
}

module.exports = CustodyBattle;
