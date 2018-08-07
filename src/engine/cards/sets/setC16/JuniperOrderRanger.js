"use strict";
const Constants = require ("../../../Constants");
const JuniperOrderRangerBase = require("../setCM2/JuniperOrderRanger");

class JuniperOrderRanger extends JuniperOrderRangerBase {
  constructor (game) {
    super(game, "Juniper Order Ranger", "Commander 2016", "C16");
  }
}

module.exports = JuniperOrderRanger;
