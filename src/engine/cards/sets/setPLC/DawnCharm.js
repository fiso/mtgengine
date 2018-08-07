"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DawnCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Dawn Charm", "Planar Chaos", "PLC");
  }
}

module.exports = DawnCharm;
