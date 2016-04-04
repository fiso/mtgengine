"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasMine extends Card {
  constructor(game) {
    super(game, "Urza's Mine", "Antiquities", "ATQ");
  }
}

module.exports = UrzasMine;
