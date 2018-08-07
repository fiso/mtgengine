"use strict";
const Constants = require ("../../../Constants");
const MurderousRedcapBase = require("../setMMA/MurderousRedcap");

class MurderousRedcap extends MurderousRedcapBase {
  constructor (game) {
    super(game, "Murderous Redcap", "Friday Night Magic 2009", "F09");
  }
}

module.exports = MurderousRedcap;
