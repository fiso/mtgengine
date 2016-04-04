"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnbreathingHordeBase = require("../setDDQ/UnbreathingHorde.js");

class UnbreathingHorde extends UnbreathingHordeBase {
  constructor(game) {
    super(game, "Unbreathing Horde", "Innistrad", "ISD");
  }
}

module.exports = UnbreathingHorde;
