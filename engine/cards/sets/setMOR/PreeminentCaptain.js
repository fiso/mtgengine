"use strict";
const Constants = require ("../../../Constants");
const PreeminentCaptainBase = require("../setM15/PreeminentCaptain");

class PreeminentCaptain extends PreeminentCaptainBase {
  constructor(game) {
    super(game, "Preeminent Captain", "Morningtide", "MOR");
  }
}

module.exports = PreeminentCaptain;
