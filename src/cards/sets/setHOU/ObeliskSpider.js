"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObeliskSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Obelisk Spider", "Hour of Devastation", "HOU");
  }
}

module.exports = ObeliskSpider;
