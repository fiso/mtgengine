"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShriekingMogg extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrieking Mogg", "Nemesis", "NMS");
  }
}

module.exports = ShriekingMogg;
