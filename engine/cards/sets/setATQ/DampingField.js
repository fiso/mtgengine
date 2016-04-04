"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DampingField extends Card {
  constructor(game) {
    super(game, "Damping Field", "Antiquities", "ATQ");
  }
}

module.exports = DampingField;
