"use strict";
const Constants = require ("../../../Constants");
const MurderousRedcapBase = require("../setMMA/MurderousRedcap");

class MurderousRedcap extends MurderousRedcapBase {
  constructor (game) {
    super(game, "Murderous Redcap", "Shadowmoor", "SHM");
  }
}

module.exports = MurderousRedcap;
