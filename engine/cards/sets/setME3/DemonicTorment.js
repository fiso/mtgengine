"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemonicTormentBase = require("../setLEG/DemonicTorment.js");

class DemonicTorment extends DemonicTormentBase {
  constructor(game) {
    super(game, "Demonic Torment", "Masters Edition III", "ME3");
  }
}

module.exports = DemonicTorment;
