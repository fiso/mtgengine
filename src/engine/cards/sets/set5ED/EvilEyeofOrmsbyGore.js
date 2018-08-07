"use strict";
const Constants = require ("../../../Constants");
const EvilEyeofOrmsbyGoreBase = require("../setTSB/EvilEyeofOrmsbyGore");

class EvilEyeofOrmsbyGore extends EvilEyeofOrmsbyGoreBase {
  constructor (game) {
    super(game, "Evil Eye of Orms-by-Gore", "Fifth Edition", "5ED");
  }
}

module.exports = EvilEyeofOrmsbyGore;
