"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Muzzle extends Card {
  constructor(game) {
    super(game, "Muzzle", "Mercadian Masques", "MMQ");
  }
}

module.exports = Muzzle;
