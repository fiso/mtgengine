"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScaldingTarn extends UnimplementedCard {
  constructor(game) {
    super(game, "Scalding Tarn", "Zendikar", "ZEN");
  }
}

module.exports = ScaldingTarn;
