"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SokenzanRenegade extends UnimplementedCard {
  constructor(game) {
    super(game, "Sokenzan Renegade", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SokenzanRenegade;
