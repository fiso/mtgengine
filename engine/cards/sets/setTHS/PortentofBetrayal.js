"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PortentofBetrayal extends UnimplementedCard {
  constructor(game) {
    super(game, "Portent of Betrayal", "Theros", "THS");
  }
}

module.exports = PortentofBetrayal;
