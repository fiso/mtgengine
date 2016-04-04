"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CruelBargainBase = require("../setPOR/CruelBargain.js");

class CruelBargain extends CruelBargainBase {
  constructor(game) {
    super(game, "Cruel Bargain", "Vintage Masters", "VMA");
  }
}

module.exports = CruelBargain;
