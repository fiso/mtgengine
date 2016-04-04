"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilverWyvernBase = require("../setSTH/SilverWyvern.js");

class SilverWyvern extends SilverWyvernBase {
  constructor(game) {
    super(game, "Silver Wyvern", "Tempest Remastered", "TPR");
  }
}

module.exports = SilverWyvern;
