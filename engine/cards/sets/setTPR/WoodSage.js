"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoodSageBase = require("../setCNS/WoodSage.js");

class WoodSage extends WoodSageBase {
  constructor(game) {
    super(game, "Wood Sage", "Tempest Remastered", "TPR");
  }
}

module.exports = WoodSage;
