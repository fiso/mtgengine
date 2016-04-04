"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FaerieImpostorBase = require("../setDDN/FaerieImpostor.js");

class FaerieImpostor extends FaerieImpostorBase {
  constructor(game) {
    super(game, "Faerie Impostor", "Return to Ravnica", "RTR");
  }
}

module.exports = FaerieImpostor;
