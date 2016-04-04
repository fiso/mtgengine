"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssaultGriffin extends Card {
  constructor(game) {
    super(game, "Assault Griffin", "Gatecrash", "GTC");
  }
}

module.exports = AssaultGriffin;
