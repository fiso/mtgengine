"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamiofthePaintedRoad extends UnimplementedCard {
  constructor(game) {
    super(game, "Kami of the Painted Road", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamiofthePaintedRoad;
