"use strict";
const Constants = require ("../../../Constants");
const ZombieMasterBase = require("../setME4/ZombieMaster");

class ZombieMaster extends ZombieMasterBase {
  constructor (game) {
    super(game, "Zombie Master", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = ZombieMaster;
