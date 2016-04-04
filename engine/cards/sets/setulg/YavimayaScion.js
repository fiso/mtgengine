"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaScion extends UnimplementedCard {
  constructor(game) {
    super(game, "Yavimaya Scion", "Urza's Legacy", "ULG");
  }
}

module.exports = YavimayaScion;
