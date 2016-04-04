"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggSquad extends UnimplementedCard {
  constructor(game) {
    super(game, "Mogg Squad", "Tempest", "TMP");
  }
}

module.exports = MoggSquad;
