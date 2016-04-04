"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshnodsCylixBase = require("../setALL/AshnodsCylix.js");

class AshnodsCylix extends AshnodsCylixBase {
  constructor(game) {
    super(game, "Ashnod's Cylix", "Masters Edition II", "ME2");
  }
}

module.exports = AshnodsCylix;
