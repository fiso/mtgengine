"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritCairn extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit Cairn", "Judgment", "JUD");
  }
}

module.exports = SpiritCairn;
