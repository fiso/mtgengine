"use strict";
const Constants = require ("../../../Constants");
const SkullsnatcherBase = require("../setPCA/Skullsnatcher");

class Skullsnatcher extends SkullsnatcherBase {
  constructor (game) {
    super(game, "Skullsnatcher", "Planechase 2012", "PC2");
  }
}

module.exports = Skullsnatcher;
