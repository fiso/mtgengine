"use strict";
const Constants = require ("../../../Constants");
const UrzasBaubleBase = require("../set5ED/UrzasBauble");

class UrzasBauble extends UrzasBaubleBase {
  constructor(game) {
    super(game, "Urza's Bauble", "Masters Edition", "MED");
  }
}

module.exports = UrzasBauble;
