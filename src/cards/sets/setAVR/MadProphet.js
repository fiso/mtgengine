"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MadProphet extends UnimplementedCard {
  constructor (game) {
    super(game, "Mad Prophet", "Avacyn Restored", "AVR");
  }
}

module.exports = MadProphet;
