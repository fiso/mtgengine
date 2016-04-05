"use strict";
const Constants = require ("../../../Constants");
const SkullsnatcherBase = require("../setBOK/Skullsnatcher");

class Skullsnatcher extends SkullsnatcherBase {
  constructor(game) {
    super(game, "Skullsnatcher", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Skullsnatcher;
