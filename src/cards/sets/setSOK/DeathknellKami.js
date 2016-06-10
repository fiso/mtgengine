"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathknellKami extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathknell Kami", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DeathknellKami;
