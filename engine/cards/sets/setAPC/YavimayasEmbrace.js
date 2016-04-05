"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayasEmbrace extends UnimplementedCard {
  constructor(game) {
    super(game, "Yavimaya's Embrace", "Apocalypse", "APC");
  }
}

module.exports = YavimayasEmbrace;
