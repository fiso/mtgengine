"use strict";
const Constants = require ("../../../Constants");
const ThunderingGiantBase = require("../setW17/ThunderingGiant");

class ThunderingGiant extends ThunderingGiantBase {
  constructor (game) {
    super(game, "Thundering Giant", "Beatdown Box Set", "BTD");
  }
}

module.exports = ThunderingGiant;
