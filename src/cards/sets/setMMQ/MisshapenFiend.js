"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MisshapenFiend extends UnimplementedCard {
  constructor(game) {
    super(game, "Misshapen Fiend", "Mercadian Masques", "MMQ");
  }
}

module.exports = MisshapenFiend;
