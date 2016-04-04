"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BansheesBlade extends Card {
  constructor(game) {
    super(game, "Banshee's Blade", "Mirrodin", "MRD");
  }
}

module.exports = BansheesBlade;
