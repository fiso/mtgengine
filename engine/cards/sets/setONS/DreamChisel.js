"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamChisel extends Card {
  constructor(game) {
    super(game, "Dream Chisel", "Onslaught", "ONS");
  }
}

module.exports = DreamChisel;
