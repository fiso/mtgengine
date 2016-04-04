"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamioftheHunt extends UnimplementedCard {
  constructor(game) {
    super(game, "Kami of the Hunt", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamioftheHunt;
