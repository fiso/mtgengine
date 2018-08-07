"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrensRunPackmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Wren's Run Packmaster", "Commander Anthology", "CMA");
  }
}

module.exports = WrensRunPackmaster;
