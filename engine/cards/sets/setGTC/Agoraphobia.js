"use strict";
const Constants = require ("../../../Constants");
const AgoraphobiaBase = require("../setDDM/Agoraphobia");

class Agoraphobia extends AgoraphobiaBase {
  constructor(game) {
    super(game, "Agoraphobia", "Gatecrash", "GTC");
  }
}

module.exports = Agoraphobia;
