"use strict";
const Constants = require ("../../../Constants");
const HelldozerBase = require("../setHOP/Helldozer");

class Helldozer extends HelldozerBase {
  constructor(game) {
    super(game, "Helldozer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Helldozer;
