"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishrasWarMachine extends UnimplementedCard {
  constructor (game) {
    super(game, "Mishra's War Machine", "Antiquities", "ATQ");
  }
}

module.exports = MishrasWarMachine;
