"use strict";
const Constants = require ("../../../Constants");
const TwoHeadedDragonBase = require("../setARC/TwoHeadedDragon");

class TwoHeadedDragon extends TwoHeadedDragonBase {
  constructor (game) {
    super(game, "Two-Headed Dragon", "Junior Super Series", "PSUS");
  }
}

module.exports = TwoHeadedDragon;
