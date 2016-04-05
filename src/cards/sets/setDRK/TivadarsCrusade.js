"use strict";
const Constants = require ("../../../Constants");
const TivadarsCrusadeBase = require("../setMED/TivadarsCrusade");

class TivadarsCrusade extends TivadarsCrusadeBase {
  constructor(game) {
    super(game, "Tivadar's Crusade", "The Dark", "DRK");
  }
}

module.exports = TivadarsCrusade;
