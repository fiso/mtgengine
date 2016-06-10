"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurrakarMarauder extends UnimplementedCard {
  constructor (game) {
    super(game, "Surrakar Marauder", "Zendikar", "ZEN");
  }
}

module.exports = SurrakarMarauder;
