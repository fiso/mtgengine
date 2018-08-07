"use strict";
const Constants = require ("../../../Constants");
const ZombieMasterBase = require("../setME4/ZombieMaster");

class ZombieMaster extends ZombieMasterBase {
  constructor (game) {
    super(game, "Zombie Master", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ZombieMaster;
