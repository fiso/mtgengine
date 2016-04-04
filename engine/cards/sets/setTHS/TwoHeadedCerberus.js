"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TwoHeadedCerberus extends Card {
  constructor(game) {
    super(game, "Two-Headed Cerberus", "Theros", "THS");
  }
}

module.exports = TwoHeadedCerberus;
