"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronBarbHellion extends UnimplementedCard {
  constructor(game) {
    super(game, "Iron-Barb Hellion", "Fifth Dawn", "5DN");
  }
}

module.exports = IronBarbHellion;
