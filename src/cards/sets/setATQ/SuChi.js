"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuChi extends UnimplementedCard {
  constructor (game) {
    super(game, "Su-Chi", "Antiquities", "ATQ");
  }
}

module.exports = SuChi;
