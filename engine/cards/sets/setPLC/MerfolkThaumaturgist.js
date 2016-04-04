"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MerfolkThaumaturgist extends Card {
  constructor(game) {
    super(game, "Merfolk Thaumaturgist", "Planar Chaos", "PLC");
  }
}

module.exports = MerfolkThaumaturgist;
