"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasMiter extends Card {
  constructor(game) {
    super(game, "Urza's Miter", "Antiquities", "ATQ");
  }
}

module.exports = UrzasMiter;
