"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GerrardsCommandBase = require("../setDDE/GerrardsCommand.js");

class GerrardsCommand extends GerrardsCommandBase {
  constructor(game) {
    super(game, "Gerrard's Command", "Planeshift", "PLS");
  }
}

module.exports = GerrardsCommand;
