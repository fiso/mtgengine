"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Watercourser extends Card {
  constructor(game) {
    super(game, "Watercourser", "Magic 2013", "M13");
  }
}

module.exports = Watercourser;
