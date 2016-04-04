"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoralHelm extends Card {
  constructor(game) {
    super(game, "Coral Helm", "Antiquities", "ATQ");
  }
}

module.exports = CoralHelm;
