"use strict";
const Constants = require ("../../../Constants");
const ZombieMasterBase = require("../set6ED/ZombieMaster");

class ZombieMaster extends ZombieMasterBase {
  constructor (game) {
    super(game, "Zombie Master", "Collector's Edition", "CED");
  }
}

module.exports = ZombieMaster;
