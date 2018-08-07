"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RayneAcademyChancellor extends UnimplementedCard {
  constructor (game) {
    super(game, "Rayne, Academy Chancellor", "Urza's Destiny", "UDS");
  }
}

module.exports = RayneAcademyChancellor;
