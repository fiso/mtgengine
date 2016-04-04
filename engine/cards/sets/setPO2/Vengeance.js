"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VengeanceBase = require("../set8ED/Vengeance.js");

class Vengeance extends VengeanceBase {
  constructor(game) {
    super(game, "Vengeance", "Portal Second Age", "PO2");
  }
}

module.exports = Vengeance;
