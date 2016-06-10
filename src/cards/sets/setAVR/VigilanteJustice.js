"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VigilanteJustice extends UnimplementedCard {
  constructor (game) {
    super(game, "Vigilante Justice", "Avacyn Restored", "AVR");
  }
}

module.exports = VigilanteJustice;
