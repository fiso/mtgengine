"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AtarkaEfreet extends Card {
  constructor(game) {
    super(game, "Atarka Efreet", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AtarkaEfreet;
