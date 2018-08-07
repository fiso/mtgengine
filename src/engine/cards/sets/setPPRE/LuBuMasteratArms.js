"use strict";
const Constants = require ("../../../Constants");
const LuBuMasteratArmsBase = require("../setME3/LuBuMasteratArms");

class LuBuMasteratArms extends LuBuMasteratArmsBase {
  constructor (game) {
    super(game, "Lu Bu, Master-at-Arms", "Prerelease Events", "PPRE");
  }
}

module.exports = LuBuMasteratArms;
