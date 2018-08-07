"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AccursedHorde extends UnimplementedCard {
  constructor (game) {
    super(game, "Accursed Horde", "Hour of Devastation", "HOU");
  }
}

module.exports = AccursedHorde;
