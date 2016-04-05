"use strict";
const Constants = require ("../../../Constants");
const FaerieImpostorBase = require("../setDDN/FaerieImpostor");

class FaerieImpostor extends FaerieImpostorBase {
  constructor(game) {
    super(game, "Faerie Impostor", "Return to Ravnica", "RTR");
  }
}

module.exports = FaerieImpostor;
