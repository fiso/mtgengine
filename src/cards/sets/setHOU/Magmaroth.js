"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Magmaroth extends UnimplementedCard {
  constructor (game) {
    super(game, "Magmaroth", "Hour of Devastation", "HOU");
  }
}

module.exports = Magmaroth;
