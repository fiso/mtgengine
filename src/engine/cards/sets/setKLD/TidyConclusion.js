"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidyConclusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidy Conclusion", "Kaladesh", "KLD");
  }
}

module.exports = TidyConclusion;
