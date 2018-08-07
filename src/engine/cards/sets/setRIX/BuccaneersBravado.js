"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BuccaneersBravado extends UnimplementedCard {
  constructor (game) {
    super(game, "Buccaneer's Bravado", "Rivals of Ixalan", "RIX");
  }
}

module.exports = BuccaneersBravado;
