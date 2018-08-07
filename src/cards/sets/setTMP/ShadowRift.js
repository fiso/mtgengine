"use strict";
const Constants = require ("../../../Constants");
const ShadowRiftBase = require("../setTPR/ShadowRift");

class ShadowRift extends ShadowRiftBase {
  constructor (game) {
    super(game, "Shadow Rift", "Tempest", "TMP");
  }
}

module.exports = ShadowRift;
