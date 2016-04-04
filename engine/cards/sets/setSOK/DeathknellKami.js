"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathknellKami extends Card {
  constructor(game) {
    super(game, "Deathknell Kami", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DeathknellKami;
