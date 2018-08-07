"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiketailDrakeling extends UnimplementedCard {
  constructor (game) {
    super(game, "Spiketail Drakeling", "Time Spiral", "TSP");
  }
}

module.exports = SpiketailDrakeling;
