"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitanicGrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Titanic Growth", "Magic 2012", "M12");
  }
}

module.exports = TitanicGrowth;
