"use strict";
const Constants = require ("../../../Constants");
const JuniperOrderRangerBase = require("../setCM2/JuniperOrderRanger");

class JuniperOrderRanger extends JuniperOrderRangerBase {
  constructor (game) {
    super(game, "Juniper Order Ranger", "Coldsnap", "CSP");
  }
}

module.exports = JuniperOrderRanger;
