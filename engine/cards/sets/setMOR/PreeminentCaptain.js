"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PreeminentCaptainBase = require("../setM15/PreeminentCaptain.js");

class PreeminentCaptain extends PreeminentCaptainBase {
  constructor(game) {
    super(game, "Preeminent Captain", "Morningtide", "MOR");
  }
}

module.exports = PreeminentCaptain;
