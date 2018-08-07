"use strict";
const Constants = require ("../../../Constants");
const DeadshotBase = require("../setTPR/Deadshot");

class Deadshot extends DeadshotBase {
  constructor (game) {
    super(game, "Deadshot", "Tempest", "TMP");
  }
}

module.exports = Deadshot;
