"use strict";
const Constants = require ("../../../Constants");
const ImperialHellkiteBase = require("../setARC/ImperialHellkite");

class ImperialHellkite extends ImperialHellkiteBase {
  constructor(game) {
    super(game, "Imperial Hellkite", "Legions", "LGN");
  }
}

module.exports = ImperialHellkite;
