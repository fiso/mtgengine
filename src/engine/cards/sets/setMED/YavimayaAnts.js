"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaAnts extends UnimplementedCard {
  constructor (game) {
    super(game, "Yavimaya Ants", "Masters Edition", "MED");
  }
}

module.exports = YavimayaAnts;
