"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamioftheTendedGarden extends Card {
  constructor(game) {
    super(game, "Kami of the Tended Garden", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KamioftheTendedGarden;
