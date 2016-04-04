"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DampingField extends UnimplementedCard {
  constructor(game) {
    super(game, "Damping Field", "Antiquities", "ATQ");
  }
}

module.exports = DampingField;
