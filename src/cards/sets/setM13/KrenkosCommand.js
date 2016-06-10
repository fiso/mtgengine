"use strict";
const Constants = require ("../../../Constants");
const KrenkosCommandBase = require("../setDDN/KrenkosCommand");

class KrenkosCommand extends KrenkosCommandBase {
  constructor (game) {
    super(game, "Krenko's Command", "Magic 2013", "M13");
  }
}

module.exports = KrenkosCommand;
