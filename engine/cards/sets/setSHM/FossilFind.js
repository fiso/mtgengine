"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FossilFind extends UnimplementedCard {
  constructor(game) {
    super(game, "Fossil Find", "Shadowmoor", "SHM");
  }
}

module.exports = FossilFind;
