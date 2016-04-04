"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EvilEyeofOrmsbyGoreBase = require("../set6ED/EvilEyeofOrmsbyGore.js");

class EvilEyeofOrmsbyGore extends EvilEyeofOrmsbyGoreBase {
  constructor(game) {
    super(game, "Evil Eye of Orms-by-Gore", "Legends", "LEG");
  }
}

module.exports = EvilEyeofOrmsbyGore;
