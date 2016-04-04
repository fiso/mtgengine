"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExpendableTroops extends Card {
  constructor(game) {
    super(game, "Expendable Troops", "Urza's Legacy", "ULG");
  }
}

module.exports = ExpendableTroops;
