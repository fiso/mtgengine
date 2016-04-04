"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimPoppet extends Card {
  constructor(game) {
    super(game, "Grim Poppet", "Shadowmoor", "SHM");
  }
}

module.exports = GrimPoppet;
