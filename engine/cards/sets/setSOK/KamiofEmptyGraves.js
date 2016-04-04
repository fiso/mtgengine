"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamiofEmptyGraves extends Card {
  constructor(game) {
    super(game, "Kami of Empty Graves", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KamiofEmptyGraves;
