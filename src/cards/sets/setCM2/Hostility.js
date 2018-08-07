"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hostility extends UnimplementedCard {
  constructor (game) {
    super(game, "Hostility", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Hostility;
