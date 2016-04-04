"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggSalvage extends UnimplementedCard {
  constructor(game) {
    super(game, "Mogg Salvage", "Nemesis", "NMS");
  }
}

module.exports = MoggSalvage;
