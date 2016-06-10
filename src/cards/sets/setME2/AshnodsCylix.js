"use strict";
const Constants = require ("../../../Constants");
const AshnodsCylixBase = require("../setALL/AshnodsCylix");

class AshnodsCylix extends AshnodsCylixBase {
  constructor (game) {
    super(game, "Ashnod's Cylix", "Masters Edition II", "ME2");
  }
}

module.exports = AshnodsCylix;
