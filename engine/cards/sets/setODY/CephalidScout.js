"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CephalidScout extends Card {
  constructor(game) {
    super(game, "Cephalid Scout", "Odyssey", "ODY");
  }
}

module.exports = CephalidScout;
