"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvenWarhounds extends UnimplementedCard {
  constructor(game) {
    super(game, "Elven Warhounds", "Tempest", "TMP");
  }
}

module.exports = ElvenWarhounds;
