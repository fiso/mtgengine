"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Abrade extends UnimplementedCard {
  constructor (game) {
    super(game, "Abrade", "Hour of Devastation", "HOU");
  }
}

module.exports = Abrade;
