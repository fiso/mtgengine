"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldofLeshrac extends UnimplementedCard {
  constructor(game) {
    super(game, "Herald of Leshrac", "Coldsnap", "CSP");
  }
}

module.exports = HeraldofLeshrac;
