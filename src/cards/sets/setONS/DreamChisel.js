"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamChisel extends UnimplementedCard {
  constructor (game) {
    super(game, "Dream Chisel", "Onslaught", "ONS");
  }
}

module.exports = DreamChisel;
