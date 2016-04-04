"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AgoraphobiaBase = require("../setDDM/Agoraphobia.js");

class Agoraphobia extends AgoraphobiaBase {
  constructor(game) {
    super(game, "Agoraphobia", "Gatecrash", "GTC");
  }
}

module.exports = Agoraphobia;
