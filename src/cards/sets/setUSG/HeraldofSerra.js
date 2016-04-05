"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldofSerra extends UnimplementedCard {
  constructor(game) {
    super(game, "Herald of Serra", "Urza's Saga", "USG");
  }
}

module.exports = HeraldofSerra;
