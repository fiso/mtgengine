"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasMine extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Mine", "Masters Edition IV", "ME4");
  }
}

module.exports = UrzasMine;
