"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SakashimasStudent extends UnimplementedCard {
  constructor (game) {
    super(game, "Sakashima's Student", "Planechase Anthology", "PCA");
  }
}

module.exports = SakashimasStudent;
