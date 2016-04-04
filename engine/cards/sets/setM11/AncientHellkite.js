"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientHellkiteBase = require("../setpLPA/AncientHellkite.js");

class AncientHellkite extends AncientHellkiteBase {
  constructor(game) {
    super(game, "Ancient Hellkite", "Magic 2011", "M11");
  }
}

module.exports = AncientHellkite;
