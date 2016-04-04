"use strict";
const Constants = require ("../../../Constants");
const SilverWyvernBase = require("../setSTH/SilverWyvern");

class SilverWyvern extends SilverWyvernBase {
  constructor(game) {
    super(game, "Silver Wyvern", "Tempest Remastered", "TPR");
  }
}

module.exports = SilverWyvern;
