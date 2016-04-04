"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecrobiteBase = require("../setAVR/Necrobite.js");

class Necrobite extends NecrobiteBase {
  constructor(game) {
    super(game, "Necrobite", "Born of the Gods", "BNG");
  }
}

module.exports = Necrobite;
