"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheDarkBarony extends Card {
  constructor(game) {
    super(game, "The Dark Barony", "Planechase", "HOP");
  }
}

module.exports = TheDarkBarony;
