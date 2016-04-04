"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonscaleBoonBase = require("../setKTK/DragonscaleBoon.js");

class DragonscaleBoon extends DragonscaleBoonBase {
  constructor(game) {
    super(game, "Dragonscale Boon", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = DragonscaleBoon;
