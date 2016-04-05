"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZadasCommando extends UnimplementedCard {
  constructor(game) {
    super(game, "Zada's Commando", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ZadasCommando;
