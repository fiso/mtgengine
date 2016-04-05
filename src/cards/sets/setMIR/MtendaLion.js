"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MtendaLion extends UnimplementedCard {
  constructor(game) {
    super(game, "Mtenda Lion", "Mirage", "MIR");
  }
}

module.exports = MtendaLion;
