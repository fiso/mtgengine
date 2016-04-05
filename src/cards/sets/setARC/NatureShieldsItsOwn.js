"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NatureShieldsItsOwn extends UnimplementedCard {
  constructor(game) {
    super(game, "Nature Shields Its Own", "Archenemy", "ARC");
  }
}

module.exports = NatureShieldsItsOwn;
