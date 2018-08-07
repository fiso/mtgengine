"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KindledFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Kindled Fury", "Hour of Devastation", "HOU");
  }
}

module.exports = KindledFury;
