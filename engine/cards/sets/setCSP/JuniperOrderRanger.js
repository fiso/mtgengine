"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JuniperOrderRanger extends UnimplementedCard {
  constructor(game) {
    super(game, "Juniper Order Ranger", "Coldsnap", "CSP");
  }
}

module.exports = JuniperOrderRanger;
