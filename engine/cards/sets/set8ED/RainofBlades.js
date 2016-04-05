"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofBlades extends UnimplementedCard {
  constructor(game) {
    super(game, "Rain of Blades", "Eighth Edition", "8ED");
  }
}

module.exports = RainofBlades;
