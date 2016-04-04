"use strict";
const Constants = require ("../../../Constants");
const DemonsHornBase = require("../setDST/DemonsHorn");

class DemonsHorn extends DemonsHornBase {
  constructor(game) {
    super(game, "Demon's Horn", "Magic 2012", "M12");
  }
}

module.exports = DemonsHorn;
