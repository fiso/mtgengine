"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasMine extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Mine", "Antiquities", "ATQ");
  }
}

module.exports = UrzasMine;
