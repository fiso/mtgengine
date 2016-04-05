"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamiofOldStone extends UnimplementedCard {
  constructor(game) {
    super(game, "Kami of Old Stone", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamiofOldStone;
