"use strict";
const Constants = require ("../../../Constants");
const AzoriusCharmBase = require("../setIMA/AzoriusCharm");

class AzoriusCharm extends AzoriusCharmBase {
  constructor (game) {
    super(game, "Azorius Charm", "Return to Ravnica", "RTR");
  }
}

module.exports = AzoriusCharm;
