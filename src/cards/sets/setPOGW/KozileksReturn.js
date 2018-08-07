"use strict";
const Constants = require ("../../../Constants");
const KozileksReturnBase = require("../setOGW/KozileksReturn");

class KozileksReturn extends KozileksReturnBase {
  constructor (game) {
    super(game, "Kozilek's Return", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = KozileksReturn;
