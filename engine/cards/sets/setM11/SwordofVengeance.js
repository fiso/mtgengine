"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordofVengeanceBase = require("../setC14/SwordofVengeance.js");

class SwordofVengeance extends SwordofVengeanceBase {
  constructor(game) {
    super(game, "Sword of Vengeance", "Magic 2011", "M11");
  }
}

module.exports = SwordofVengeance;
