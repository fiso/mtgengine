"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZombieMasterBase = require("../set6ED/ZombieMaster.js");

class ZombieMaster extends ZombieMasterBase {
  constructor(game) {
    super(game, "Zombie Master", "Revised Edition", "3ED");
  }
}

module.exports = ZombieMaster;
