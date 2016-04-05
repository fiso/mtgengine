"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlickeringWard extends UnimplementedCard {
  constructor(game) {
    super(game, "Flickering Ward", "Tempest", "TMP");
  }
}

module.exports = FlickeringWard;
