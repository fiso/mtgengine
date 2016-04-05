"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TickingGnomes extends UnimplementedCard {
  constructor(game) {
    super(game, "Ticking Gnomes", "Urza's Legacy", "ULG");
  }
}

module.exports = TickingGnomes;
