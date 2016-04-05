"use strict";
const Constants = require ("../../../Constants");
const NecrobiteBase = require("../setAVR/Necrobite");

class Necrobite extends NecrobiteBase {
  constructor(game) {
    super(game, "Necrobite", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Necrobite;
