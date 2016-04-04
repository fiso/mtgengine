"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralHelm extends UnimplementedCard {
  constructor(game) {
    super(game, "Coral Helm", "Antiquities", "ATQ");
  }
}

module.exports = CoralHelm;
