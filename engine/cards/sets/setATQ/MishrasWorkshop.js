"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MishrasWorkshop extends Card {
  constructor(game) {
    super(game, "Mishra's Workshop", "Antiquities", "ATQ");
  }
}

module.exports = MishrasWorkshop;
