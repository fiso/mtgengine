"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorthyCause extends UnimplementedCard {
  constructor(game) {
    super(game, "Worthy Cause", "Tempest", "TMP");
  }
}

module.exports = WorthyCause;
