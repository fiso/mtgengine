"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RendingVines extends Card {
  constructor(game) {
    super(game, "Rending Vines", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RendingVines;
