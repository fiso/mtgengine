"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldoftheHost extends UnimplementedCard {
  constructor (game) {
    super(game, "Herald of the Host", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = HeraldoftheHost;
