"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilkenfistOrder extends Card {
  constructor(game) {
    super(game, "Silkenfist Order", "Nemesis", "NMS");
  }
}

module.exports = SilkenfistOrder;
