"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SomberwaldVigilante extends UnimplementedCard {
  constructor(game) {
    super(game, "Somberwald Vigilante", "Avacyn Restored", "AVR");
  }
}

module.exports = SomberwaldVigilante;
