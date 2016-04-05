"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggToady extends UnimplementedCard {
  constructor(game) {
    super(game, "Mogg Toady", "Nemesis", "NMS");
  }
}

module.exports = MoggToady;
