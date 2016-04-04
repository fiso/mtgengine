"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasChalice extends Card {
  constructor(game) {
    super(game, "Urza's Chalice", "Antiquities", "ATQ");
  }
}

module.exports = UrzasChalice;
