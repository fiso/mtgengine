"use strict";
const Constants = require ("../../../Constants");
const ThunderingGiantBase = require("../setBTD/ThunderingGiant");

class ThunderingGiant extends ThunderingGiantBase {
  constructor(game) {
    super(game, "Thundering Giant", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ThunderingGiant;
