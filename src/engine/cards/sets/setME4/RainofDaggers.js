"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofDaggers extends UnimplementedCard {
  constructor (game) {
    super(game, "Rain of Daggers", "Masters Edition IV", "ME4");
  }
}

module.exports = RainofDaggers;
