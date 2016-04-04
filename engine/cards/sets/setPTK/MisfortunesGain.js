"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MisfortunesGainBase = require("../setME3/MisfortunesGain.js");

class MisfortunesGain extends MisfortunesGainBase {
  constructor(game) {
    super(game, "Misfortune's Gain", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MisfortunesGain;
