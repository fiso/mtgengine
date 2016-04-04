"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shocker extends UnimplementedCard {
  constructor(game) {
    super(game, "Shocker", "Tempest", "TMP");
  }
}

module.exports = Shocker;
