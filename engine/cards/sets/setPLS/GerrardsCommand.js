"use strict";
const Constants = require ("../../../Constants");
const GerrardsCommandBase = require("../setDDE/GerrardsCommand");

class GerrardsCommand extends GerrardsCommandBase {
  constructor(game) {
    super(game, "Gerrard's Command", "Planeshift", "PLS");
  }
}

module.exports = GerrardsCommand;
