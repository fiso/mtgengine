"use strict";
const Constants = require ("../../../Constants");
const BeholdtheBeyondBase = require("../setSOI/BeholdtheBeyond");

class BeholdtheBeyond extends BeholdtheBeyondBase {
  constructor (game) {
    super(game, "Behold the Beyond", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = BeholdtheBeyond;
