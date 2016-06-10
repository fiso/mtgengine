"use strict";
const Constants = require ("../../../Constants");
const MisfortunesGainBase = require("../setME3/MisfortunesGain");

class MisfortunesGain extends MisfortunesGainBase {
  constructor (game) {
    super(game, "Misfortune's Gain", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MisfortunesGain;
