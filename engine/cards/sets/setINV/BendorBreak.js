"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BendorBreak extends UnimplementedCard {
  constructor(game) {
    super(game, "Bend or Break", "Invasion", "INV");
  }
}

module.exports = BendorBreak;
