"use strict";
const Constants = require ("../../../Constants");
const AshnodsCylixBase = require("../setME2/AshnodsCylix");

class AshnodsCylix extends AshnodsCylixBase {
  constructor (game) {
    super(game, "Ashnod's Cylix", "Alliances", "ALL");
  }
}

module.exports = AshnodsCylix;
