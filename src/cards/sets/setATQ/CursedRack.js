"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CursedRack extends UnimplementedCard {
  constructor(game) {
    super(game, "Cursed Rack", "Antiquities", "ATQ");
  }
}

module.exports = CursedRack;
