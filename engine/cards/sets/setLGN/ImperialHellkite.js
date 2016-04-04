"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImperialHellkiteBase = require("../setARC/ImperialHellkite.js");

class ImperialHellkite extends ImperialHellkiteBase {
  constructor(game) {
    super(game, "Imperial Hellkite", "Legions", "LGN");
  }
}

module.exports = ImperialHellkite;
