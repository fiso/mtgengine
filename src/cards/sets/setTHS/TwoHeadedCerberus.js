"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwoHeadedCerberus extends UnimplementedCard {
  constructor (game) {
    super(game, "Two-Headed Cerberus", "Theros", "THS");
  }
}

module.exports = TwoHeadedCerberus;
