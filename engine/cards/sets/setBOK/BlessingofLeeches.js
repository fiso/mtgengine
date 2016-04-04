"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlessingofLeeches extends Card {
  constructor(game) {
    super(game, "Blessing of Leeches", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BlessingofLeeches;
