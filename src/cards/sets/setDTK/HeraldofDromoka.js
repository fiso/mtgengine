"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldofDromoka extends UnimplementedCard {
  constructor (game) {
    super(game, "Herald of Dromoka", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HeraldofDromoka;
