"use strict";
const Constants = require ("../../../Constants");
const KarrthusTyrantofJundBase = require("../setOCM1/KarrthusTyrantofJund");

class KarrthusTyrantofJund extends KarrthusTyrantofJundBase {
  constructor (game) {
    super(game, "Karrthus, Tyrant of Jund", "Alara Reborn", "ARB");
  }
}

module.exports = KarrthusTyrantofJund;
