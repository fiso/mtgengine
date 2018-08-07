"use strict";
const Constants = require ("../../../Constants");
const VastwoodZendikonBase = require("../setE01/VastwoodZendikon");

class VastwoodZendikon extends VastwoodZendikonBase {
  constructor (game) {
    super(game, "Vastwood Zendikon", "Worldwake", "WWK");
  }
}

module.exports = VastwoodZendikon;
