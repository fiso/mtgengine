"use strict";
const Constants = require ("../../../Constants");
const AncientHellkiteBase = require("../setM11/AncientHellkite");

class AncientHellkite extends AncientHellkiteBase {
  constructor (game) {
    super(game, "Ancient Hellkite", "Magic Online Promos", "PRM");
  }
}

module.exports = AncientHellkite;
