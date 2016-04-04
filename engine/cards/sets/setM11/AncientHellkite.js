"use strict";
const Constants = require ("../../../Constants");
const AncientHellkiteBase = require("../setpLPA/AncientHellkite");

class AncientHellkite extends AncientHellkiteBase {
  constructor(game) {
    super(game, "Ancient Hellkite", "Magic 2011", "M11");
  }
}

module.exports = AncientHellkite;
