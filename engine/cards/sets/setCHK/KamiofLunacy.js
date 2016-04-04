"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamiofLunacy extends UnimplementedCard {
  constructor(game) {
    super(game, "Kami of Lunacy", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamiofLunacy;
