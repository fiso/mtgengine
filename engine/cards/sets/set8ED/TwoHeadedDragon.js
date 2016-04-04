"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwoHeadedDragonBase = require("../setARC/TwoHeadedDragon.js");

class TwoHeadedDragon extends TwoHeadedDragonBase {
  constructor(game) {
    super(game, "Two-Headed Dragon", "Eighth Edition", "8ED");
  }
}

module.exports = TwoHeadedDragon;
