"use strict";
const Constants = require ("../../../Constants");
const ShalaiVoiceofPlentyBase = require("../setDOM/ShalaiVoiceofPlenty");

class ShalaiVoiceofPlenty extends ShalaiVoiceofPlentyBase {
  constructor (game) {
    super(game, "Shalai, Voice of Plenty", "Dominaria Promos", "PDOM");
  }
}

module.exports = ShalaiVoiceofPlenty;
