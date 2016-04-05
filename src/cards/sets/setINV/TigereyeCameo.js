"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TigereyeCameo extends UnimplementedCard {
  constructor(game) {
    super(game, "Tigereye Cameo", "Invasion", "INV");
  }
}

module.exports = TigereyeCameo;
