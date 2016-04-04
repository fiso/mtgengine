"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrenkosCommandBase = require("../setDDN/KrenkosCommand.js");

class KrenkosCommand extends KrenkosCommandBase {
  constructor(game) {
    super(game, "Krenko's Command", "Magic 2013", "M13");
  }
}

module.exports = KrenkosCommand;
