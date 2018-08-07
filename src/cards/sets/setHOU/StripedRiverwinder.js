"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StripedRiverwinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Striped Riverwinder", "Hour of Devastation", "HOU");
  }
}

module.exports = StripedRiverwinder;
