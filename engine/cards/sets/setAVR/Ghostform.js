"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ghostform extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghostform", "Avacyn Restored", "AVR");
  }
}

module.exports = Ghostform;
