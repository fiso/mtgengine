"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PainfulQuandary extends Card {
  constructor(game) {
    super(game, "Painful Quandary", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PainfulQuandary;
