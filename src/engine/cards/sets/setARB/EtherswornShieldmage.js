"use strict";
const Constants = require ("../../../Constants");
const EtherswornShieldmageBase = require("../setARC/EtherswornShieldmage");

class EtherswornShieldmage extends EtherswornShieldmageBase {
  constructor (game) {
    super(game, "Ethersworn Shieldmage", "Alara Reborn", "ARB");
  }
}

module.exports = EtherswornShieldmage;
