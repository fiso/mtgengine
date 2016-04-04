"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarmongerBase = require("../setpMEI/Warmonger.js");

class Warmonger extends WarmongerBase {
  constructor(game) {
    super(game, "Warmonger", "Mercadian Masques", "MMQ");
  }
}

module.exports = Warmonger;
