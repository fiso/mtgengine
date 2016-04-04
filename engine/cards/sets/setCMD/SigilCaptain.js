"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SigilCaptainBase = require("../setARB/SigilCaptain.js");

class SigilCaptain extends SigilCaptainBase {
  constructor(game) {
    super(game, "Sigil Captain", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SigilCaptain;
