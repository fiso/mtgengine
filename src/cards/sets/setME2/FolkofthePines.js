"use strict";
const Constants = require ("../../../Constants");
const FolkofthePinesBase = require("../setDKM/FolkofthePines");

class FolkofthePines extends FolkofthePinesBase {
  constructor (game) {
    super(game, "Folk of the Pines", "Masters Edition II", "ME2");
  }
}

module.exports = FolkofthePines;
