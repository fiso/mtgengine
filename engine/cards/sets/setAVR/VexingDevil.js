"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VexingDevil extends UnimplementedCard {
  constructor(game) {
    super(game, "Vexing Devil", "Avacyn Restored", "AVR");
  }
}

module.exports = VexingDevil;
