"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MishrasWarMachine extends Card {
  constructor(game) {
    super(game, "Mishra's War Machine", "Antiquities", "ATQ");
  }
}

module.exports = MishrasWarMachine;
