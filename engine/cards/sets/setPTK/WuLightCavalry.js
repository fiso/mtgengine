"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WuLightCavalry extends Card {
  constructor(game) {
    super(game, "Wu Light Cavalry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuLightCavalry;
