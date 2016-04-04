"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvacynAngelofHopeBase = require("../setAVR/AvacynAngelofHope.js");

class AvacynAngelofHope extends AvacynAngelofHopeBase {
  constructor(game) {
    super(game, "Avacyn, Angel of Hope", "From the Vault: Angels", "V15");
  }
}

module.exports = AvacynAngelofHope;
