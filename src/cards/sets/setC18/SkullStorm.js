"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkullStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Skull Storm", "Commander 2018", "C18");
  }
}

module.exports = SkullStorm;
