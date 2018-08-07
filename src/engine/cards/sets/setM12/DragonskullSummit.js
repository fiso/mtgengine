"use strict";
const Constants = require ("../../../Constants");
const DragonskullSummitBase = require("../setXLN/DragonskullSummit");

class DragonskullSummit extends DragonskullSummitBase {
  constructor (game) {
    super(game, "Dragonskull Summit", "Magic 2012", "M12");
  }
}

module.exports = DragonskullSummit;
