"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldofAnafenza extends UnimplementedCard {
  constructor (game) {
    super(game, "Herald of Anafenza", "Khans of Tarkir", "KTK");
  }
}

module.exports = HeraldofAnafenza;
