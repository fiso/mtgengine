"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NettlevineBlight extends UnimplementedCard {
  constructor(game) {
    super(game, "Nettlevine Blight", "Lorwyn", "LRW");
  }
}

module.exports = NettlevineBlight;
