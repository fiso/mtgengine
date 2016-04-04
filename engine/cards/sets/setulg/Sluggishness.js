"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sluggishness extends Card {
  constructor(game) {
    super(game, "Sluggishness", "Urza's Legacy", "ULG");
  }
}

module.exports = Sluggishness;
