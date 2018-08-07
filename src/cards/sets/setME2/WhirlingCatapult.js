"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhirlingCatapult extends UnimplementedCard {
  constructor (game) {
    super(game, "Whirling Catapult", "Masters Edition II", "ME2");
  }
}

module.exports = WhirlingCatapult;
