"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamiofthePaintedRoad extends Card {
  constructor(game) {
    super(game, "Kami of the Painted Road", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamiofthePaintedRoad;
