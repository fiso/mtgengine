"use strict";
const Constants = require ("../../../Constants");
const MasterofEtheriumBase = require("../setDDF/MasterofEtherium");

class MasterofEtherium extends MasterofEtheriumBase {
  constructor (game) {
    super(game, "Master of Etherium", "Planechase", "HOP");
  }
}

module.exports = MasterofEtherium;
