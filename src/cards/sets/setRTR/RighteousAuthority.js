"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RighteousAuthority extends UnimplementedCard {
  constructor (game) {
    super(game, "Righteous Authority", "Return to Ravnica", "RTR");
  }
}

module.exports = RighteousAuthority;
