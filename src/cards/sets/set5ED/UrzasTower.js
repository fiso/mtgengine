"use strict";
const Constants = require ("../../../Constants");
const UrzasTowerBase = require("../setATQ/UrzasTower");

class UrzasTower extends UrzasTowerBase {
  constructor (game) {
    super(game, "Urza's Tower", "Fifth Edition", "5ED");
  }
}

module.exports = UrzasTower;
