"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NemesisTrapBase = require("../setCMD/NemesisTrap.js");

class NemesisTrap extends NemesisTrapBase {
  constructor(game) {
    super(game, "Nemesis Trap", "Worldwake", "WWK");
  }
}

module.exports = NemesisTrap;
