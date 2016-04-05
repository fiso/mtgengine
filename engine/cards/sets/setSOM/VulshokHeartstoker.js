"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulshokHeartstoker extends UnimplementedCard {
  constructor(game) {
    super(game, "Vulshok Heartstoker", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VulshokHeartstoker;
