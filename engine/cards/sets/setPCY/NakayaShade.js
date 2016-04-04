"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NakayaShade extends UnimplementedCard {
  constructor(game) {
    super(game, "Nakaya Shade", "Prophecy", "PCY");
  }
}

module.exports = NakayaShade;
