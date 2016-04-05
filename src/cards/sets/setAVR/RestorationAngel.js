"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RestorationAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Restoration Angel", "Avacyn Restored", "AVR");
  }
}

module.exports = RestorationAngel;
