"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaAnts extends UnimplementedCard {
  constructor(game) {
    super(game, "Yavimaya Ants", "Alliances", "ALL");
  }
}

module.exports = YavimayaAnts;
