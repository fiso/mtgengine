"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordofVengeanceBase = require("../setC14/SwordofVengeance.js");

class SwordofVengeance extends SwordofVengeanceBase {
  constructor(game) {
    super(game, "Sword of Vengeance", "Commander 2015", "C15");
  }
}

module.exports = SwordofVengeance;
