"use strict";
const Constants = require ("../../../Constants");
const ReclaimBase = require("../setORI/Reclaim");

class Reclaim extends ReclaimBase {
  constructor (game) {
    super(game, "Reclaim", "Magic 2012", "M12");
  }
}

module.exports = Reclaim;
