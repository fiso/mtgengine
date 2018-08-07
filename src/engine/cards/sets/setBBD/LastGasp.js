"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastGasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Last Gasp", "Battlebond", "BBD");
  }
}

module.exports = LastGasp;
