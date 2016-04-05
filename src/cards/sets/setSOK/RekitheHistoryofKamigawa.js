"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RekitheHistoryofKamigawa extends UnimplementedCard {
  constructor(game) {
    super(game, "Reki, the History of Kamigawa", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RekitheHistoryofKamigawa;
