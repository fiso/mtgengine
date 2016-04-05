"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleofPlenty extends UnimplementedCard {
  constructor(game) {
    super(game, "Temple of Plenty", "Born of the Gods", "BNG");
  }
}

module.exports = TempleofPlenty;
