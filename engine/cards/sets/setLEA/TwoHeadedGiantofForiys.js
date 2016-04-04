"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwoHeadedGiantofForiysBase = require("../setCED/TwoHeadedGiantofForiys.js");

class TwoHeadedGiantofForiys extends TwoHeadedGiantofForiysBase {
  constructor(game) {
    super(game, "Two-Headed Giant of Foriys", "Limited Edition Alpha", "LEA");
  }
}

module.exports = TwoHeadedGiantofForiys;
