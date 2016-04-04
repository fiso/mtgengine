"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SickandTired extends Card {
  constructor(game) {
    super(game, "Sick and Tired", "Urza's Legacy", "ULG");
  }
}

module.exports = SickandTired;
