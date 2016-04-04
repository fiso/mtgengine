"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MistLeopard extends Card {
  constructor(game) {
    super(game, "Mist Leopard", "Magic 2010", "M10");
  }
}

module.exports = MistLeopard;
