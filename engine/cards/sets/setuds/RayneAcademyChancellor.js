"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RayneAcademyChancellor extends Card {
  constructor(game) {
    super(game, "Rayne, Academy Chancellor", "Urza's Destiny", "UDS");
  }
}

module.exports = RayneAcademyChancellor;
