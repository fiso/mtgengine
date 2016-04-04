"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KithkinGreatheartBase = require("../setLRW/KithkinGreatheart.js");

class KithkinGreatheart extends KithkinGreatheartBase {
  constructor(game) {
    super(game, "Kithkin Greatheart", "Modern Masters", "MMA");
  }
}

module.exports = KithkinGreatheart;
