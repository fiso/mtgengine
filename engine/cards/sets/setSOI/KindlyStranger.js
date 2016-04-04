"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KindlyStranger extends Card {
  constructor(game) {
    super(game, "Kindly Stranger", "Shadows over Innistrad", "SOI");
  }
}

module.exports = KindlyStranger;
