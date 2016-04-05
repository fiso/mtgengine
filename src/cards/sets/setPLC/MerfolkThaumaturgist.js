"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkThaumaturgist extends UnimplementedCard {
  constructor(game) {
    super(game, "Merfolk Thaumaturgist", "Planar Chaos", "PLC");
  }
}

module.exports = MerfolkThaumaturgist;
