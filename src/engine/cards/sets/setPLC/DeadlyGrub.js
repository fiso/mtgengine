"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadlyGrub extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadly Grub", "Planar Chaos", "PLC");
  }
}

module.exports = DeadlyGrub;
