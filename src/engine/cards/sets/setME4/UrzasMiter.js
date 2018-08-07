"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasMiter extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Miter", "Masters Edition IV", "ME4");
  }
}

module.exports = UrzasMiter;
