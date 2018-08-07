"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class XenagosAscended extends UnimplementedCard {
  constructor (game) {
    super(game, "Xenagos Ascended", "Defeat a God", "TDAG");
  }
}

module.exports = XenagosAscended;
