"use strict";
const Constants = require ("../../../Constants");
const NecrobiteBase = require("../setAVR/Necrobite");

class Necrobite extends NecrobiteBase {
  constructor(game) {
    super(game, "Necrobite", "Born of the Gods", "BNG");
  }
}

module.exports = Necrobite;
