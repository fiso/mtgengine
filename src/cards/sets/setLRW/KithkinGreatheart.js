"use strict";
const Constants = require ("../../../Constants");
const KithkinGreatheartBase = require("../setMMA/KithkinGreatheart");

class KithkinGreatheart extends KithkinGreatheartBase {
  constructor (game) {
    super(game, "Kithkin Greatheart", "Lorwyn", "LRW");
  }
}

module.exports = KithkinGreatheart;
