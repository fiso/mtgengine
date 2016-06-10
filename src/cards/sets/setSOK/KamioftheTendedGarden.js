"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamioftheTendedGarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Kami of the Tended Garden", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KamioftheTendedGarden;
