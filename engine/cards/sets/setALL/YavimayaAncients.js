"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaAncients extends UnimplementedCard {
  constructor(game) {
    super(game, "Yavimaya Ancients", "Alliances", "ALL");
  }
}

module.exports = YavimayaAncients;
