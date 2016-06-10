"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WurmsTooth extends UnimplementedCard {
  constructor (game) {
    super(game, "Wurm's Tooth", "Darksteel", "DST");
  }
}

module.exports = WurmsTooth;
