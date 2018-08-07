"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OverwhelmingSplendor extends UnimplementedCard {
  constructor (game) {
    super(game, "Overwhelming Splendor", "Hour of Devastation", "HOU");
  }
}

module.exports = OverwhelmingSplendor;
