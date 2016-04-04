"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecrobiteBase = require("../setAVR/Necrobite.js");

class Necrobite extends NecrobiteBase {
  constructor(game) {
    super(game, "Necrobite", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Necrobite;
