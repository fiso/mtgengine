"use strict";
const Constants = require ("../../../Constants");
const EtherswornShieldmageBase = require("../setARB/EtherswornShieldmage");

class EtherswornShieldmage extends EtherswornShieldmageBase {
  constructor (game) {
    super(game, "Ethersworn Shieldmage", "Archenemy", "ARC");
  }
}

module.exports = EtherswornShieldmage;
