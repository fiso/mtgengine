"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EtherswornShieldmageBase = require("../setARB/EtherswornShieldmage.js");

class EtherswornShieldmage extends EtherswornShieldmageBase {
  constructor(game) {
    super(game, "Ethersworn Shieldmage", "Archenemy", "ARC");
  }
}

module.exports = EtherswornShieldmage;
