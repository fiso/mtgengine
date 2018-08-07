"use strict";
const Constants = require ("../../../Constants");
const IorRuinExpeditionBase = require("../setE01/IorRuinExpedition");

class IorRuinExpedition extends IorRuinExpeditionBase {
  constructor (game) {
    super(game, "Ior Ruin Expedition", "Zendikar", "ZEN");
  }
}

module.exports = IorRuinExpedition;
