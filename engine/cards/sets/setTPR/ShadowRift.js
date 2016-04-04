"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShadowRiftBase = require("../setTMP/ShadowRift.js");

class ShadowRift extends ShadowRiftBase {
  constructor(game) {
    super(game, "Shadow Rift", "Tempest Remastered", "TPR");
  }
}

module.exports = ShadowRift;
