"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranKnight extends UnimplementedCard {
  constructor(game) {
    super(game, "Kjeldoran Knight", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranKnight;
