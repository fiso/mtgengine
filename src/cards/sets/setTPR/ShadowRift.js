"use strict";
const Constants = require ("../../../Constants");
const ShadowRiftBase = require("../setTMP/ShadowRift");

class ShadowRift extends ShadowRiftBase {
  constructor (game) {
    super(game, "Shadow Rift", "Tempest Remastered", "TPR");
  }
}

module.exports = ShadowRift;
