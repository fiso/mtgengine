"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssaultGriffin extends UnimplementedCard {
  constructor (game) {
    super(game, "Assault Griffin", "Gatecrash", "GTC");
  }
}

module.exports = AssaultGriffin;
