"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasMiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Miter", "Antiquities", "ATQ");
  }
}

module.exports = UrzasMiter;
