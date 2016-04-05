"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshnodsAltar extends UnimplementedCard {
  constructor(game) {
    super(game, "Ashnod's Altar", "Antiquities", "ATQ");
  }
}

module.exports = AshnodsAltar;
