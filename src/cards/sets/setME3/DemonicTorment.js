"use strict";
const Constants = require ("../../../Constants");
const DemonicTormentBase = require("../setLEG/DemonicTorment");

class DemonicTorment extends DemonicTormentBase {
  constructor(game) {
    super(game, "Demonic Torment", "Masters Edition III", "ME3");
  }
}

module.exports = DemonicTorment;
