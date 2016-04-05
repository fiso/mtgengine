"use strict";
const Constants = require ("../../../Constants");
const ScragnothBase = require("../setpFNM/Scragnoth");

class Scragnoth extends ScragnothBase {
  constructor(game) {
    super(game, "Scragnoth", "Tempest", "TMP");
  }
}

module.exports = Scragnoth;
