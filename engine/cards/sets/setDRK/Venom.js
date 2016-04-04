"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VenomBase = require("../set5ED/Venom.js");

class Venom extends VenomBase {
  constructor(game) {
    super(game, "Venom", "The Dark", "DRK");
  }
}

module.exports = Venom;
