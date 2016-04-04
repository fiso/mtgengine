"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwoHeadedDragonBase = require("../setARC/TwoHeadedDragon.js");

class TwoHeadedDragon extends TwoHeadedDragonBase {
  constructor(game) {
    super(game, "Two-Headed Dragon", "From the Vault: Dragons", "DRB");
  }
}

module.exports = TwoHeadedDragon;
