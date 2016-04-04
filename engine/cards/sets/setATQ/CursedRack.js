"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CursedRack extends Card {
  constructor(game) {
    super(game, "Cursed Rack", "Antiquities", "ATQ");
  }
}

module.exports = CursedRack;
