"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieBoa extends UnimplementedCard {
  constructor(game) {
    super(game, "Zombie Boa", "Apocalypse", "APC");
  }
}

module.exports = ZombieBoa;
