"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HourofRevelation extends UnimplementedCard {
  constructor (game) {
    super(game, "Hour of Revelation", "Hour of Devastation", "HOU");
  }
}

module.exports = HourofRevelation;
