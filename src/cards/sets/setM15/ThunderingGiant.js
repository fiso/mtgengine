"use strict";
const Constants = require ("../../../Constants");
const ThunderingGiantBase = require("../setW17/ThunderingGiant");

class ThunderingGiant extends ThunderingGiantBase {
  constructor (game) {
    super(game, "Thundering Giant", "Magic 2015", "M15");
  }
}

module.exports = ThunderingGiant;
