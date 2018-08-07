"use strict";
const Constants = require ("../../../Constants");
const ArachnusWebBase = require("../setMM3/ArachnusWeb");

class ArachnusWeb extends ArachnusWebBase {
  constructor (game) {
    super(game, "Arachnus Web", "Magic 2012", "M12");
  }
}

module.exports = ArachnusWeb;
