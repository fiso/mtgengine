"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaGranger extends UnimplementedCard {
  constructor (game) {
    super(game, "Yavimaya Granger", "Urza's Legacy", "ULG");
  }
}

module.exports = YavimayaGranger;
