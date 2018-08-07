"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VraskaRelicSeeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Vraska, Relic Seeker", "Ixalan", "XLN");
  }
}

module.exports = VraskaRelicSeeker;
