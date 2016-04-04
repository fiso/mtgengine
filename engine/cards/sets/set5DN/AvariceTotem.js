"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvariceTotem extends Card {
  constructor(game) {
    super(game, "Avarice Totem", "Fifth Dawn", "5DN");
  }
}

module.exports = AvariceTotem;
