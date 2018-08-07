"use strict";
const Constants = require ("../../../Constants");
const TwoHeadedGiantBase = require("../setDOM/TwoHeadedGiant");

class TwoHeadedGiant extends TwoHeadedGiantBase {
  constructor (game) {
    super(game, "Two-Headed Giant", "Dominaria Promos", "PDOM");
  }
}

module.exports = TwoHeadedGiant;
