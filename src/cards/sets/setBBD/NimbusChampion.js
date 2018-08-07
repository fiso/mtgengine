"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimbusChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Nimbus Champion", "Battlebond", "BBD");
  }
}

module.exports = NimbusChampion;
