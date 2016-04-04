"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LuBuMasteratArmsBase = require("../setME3/LuBuMasteratArms.js");

class LuBuMasteratArms extends LuBuMasteratArmsBase {
  constructor(game) {
    super(game, "Lu Bu, Master-at-Arms", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LuBuMasteratArms;
