"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverHoopoe extends UnimplementedCard {
  constructor (game) {
    super(game, "River Hoopoe", "Hour of Devastation", "HOU");
  }
}

module.exports = RiverHoopoe;
