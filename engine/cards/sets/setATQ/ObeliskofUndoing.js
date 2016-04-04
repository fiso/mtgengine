"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ObeliskofUndoing extends Card {
  constructor(game) {
    super(game, "Obelisk of Undoing", "Antiquities", "ATQ");
  }
}

module.exports = ObeliskofUndoing;
