"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwoHeadedGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Two-Headed Giant", "Dominaria", "DOM");
  }
}

module.exports = TwoHeadedGiant;
