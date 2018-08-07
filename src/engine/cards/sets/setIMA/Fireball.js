"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fireball extends UnimplementedCard {
  constructor (game) {
    super(game, "Fireball", "Iconic Masters", "IMA");
  }
}

module.exports = Fireball;
