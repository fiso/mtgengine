"use strict";
const Constants = require ("../../../Constants");
const FolkofthePinesBase = require("../setME2/FolkofthePines");

class FolkofthePines extends FolkofthePinesBase {
  constructor (game) {
    super(game, "Folk of the Pines", "Deckmasters", "DKM");
  }
}

module.exports = FolkofthePines;
