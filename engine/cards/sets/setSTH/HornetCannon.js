"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HornetCannonBase = require("../setDDE/HornetCannon.js");

class HornetCannon extends HornetCannonBase {
  constructor(game) {
    super(game, "Hornet Cannon", "Stronghold", "STH");
  }
}

module.exports = HornetCannon;
