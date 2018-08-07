"use strict";
const Constants = require ("../../../Constants");
const WarmongerHellkiteBase = require("../setCM2/WarmongerHellkite");

class WarmongerHellkite extends WarmongerHellkiteBase {
  constructor (game) {
    super(game, "Warmonger Hellkite", "Commander 2014", "C14");
  }
}

module.exports = WarmongerHellkite;
