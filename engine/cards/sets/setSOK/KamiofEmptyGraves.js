"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamiofEmptyGraves extends UnimplementedCard {
  constructor(game) {
    super(game, "Kami of Empty Graves", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KamiofEmptyGraves;
