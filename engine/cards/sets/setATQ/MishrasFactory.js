"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MishrasFactory extends Card {
  constructor(game) {
    super(game, "Mishra's Factory", "Antiquities", "ATQ");
  }
}

module.exports = MishrasFactory;
