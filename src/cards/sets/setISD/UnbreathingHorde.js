"use strict";
const Constants = require ("../../../Constants");
const UnbreathingHordeBase = require("../setDDQ/UnbreathingHorde");

class UnbreathingHorde extends UnbreathingHordeBase {
  constructor (game) {
    super(game, "Unbreathing Horde", "Innistrad", "ISD");
  }
}

module.exports = UnbreathingHorde;
