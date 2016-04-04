"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColdsteelHeart extends UnimplementedCard {
  constructor(game) {
    super(game, "Coldsteel Heart", "Coldsnap", "CSP");
  }
}

module.exports = ColdsteelHeart;
