"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GodPharaohsGift extends UnimplementedCard {
  constructor (game) {
    super(game, "God-Pharaoh's Gift", "Hour of Devastation", "HOU");
  }
}

module.exports = GodPharaohsGift;
