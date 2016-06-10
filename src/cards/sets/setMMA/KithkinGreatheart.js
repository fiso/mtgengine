"use strict";
const Constants = require ("../../../Constants");
const KithkinGreatheartBase = require("../setLRW/KithkinGreatheart");

class KithkinGreatheart extends KithkinGreatheartBase {
  constructor (game) {
    super(game, "Kithkin Greatheart", "Modern Masters", "MMA");
  }
}

module.exports = KithkinGreatheart;
