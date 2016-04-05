"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HelmofKaldra extends UnimplementedCard {
  constructor(game) {
    super(game, "Helm of Kaldra", "Fifth Dawn", "5DN");
  }
}

module.exports = HelmofKaldra;
