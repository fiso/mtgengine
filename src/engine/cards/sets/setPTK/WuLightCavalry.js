"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WuLightCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Wu Light Cavalry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuLightCavalry;
