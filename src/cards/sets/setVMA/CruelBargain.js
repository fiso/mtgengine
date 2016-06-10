"use strict";
const Constants = require ("../../../Constants");
const CruelBargainBase = require("../setPOR/CruelBargain");

class CruelBargain extends CruelBargainBase {
  constructor (game) {
    super(game, "Cruel Bargain", "Vintage Masters", "VMA");
  }
}

module.exports = CruelBargain;
