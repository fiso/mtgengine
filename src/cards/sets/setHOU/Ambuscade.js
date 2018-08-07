"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ambuscade extends UnimplementedCard {
  constructor (game) {
    super(game, "Ambuscade", "Hour of Devastation", "HOU");
  }
}

module.exports = Ambuscade;
