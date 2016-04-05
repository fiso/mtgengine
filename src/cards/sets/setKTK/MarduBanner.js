"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduBanner extends UnimplementedCard {
  constructor(game) {
    super(game, "Mardu Banner", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduBanner;
