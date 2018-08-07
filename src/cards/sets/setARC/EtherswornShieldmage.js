"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtherswornShieldmage extends UnimplementedCard {
  constructor (game) {
    super(game, "Ethersworn Shieldmage", "Archenemy", "ARC");
  }
}

module.exports = EtherswornShieldmage;
