"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErsatzGnomes extends UnimplementedCard {
  constructor (game) {
    super(game, "Ersatz Gnomes", "Mirage", "MIR");
  }
}

module.exports = ErsatzGnomes;
