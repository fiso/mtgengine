"use strict";
const Constants = require ("../../../Constants");
const ZealousInquisitorBase = require("../set9ED/ZealousInquisitor");

class ZealousInquisitor extends ZealousInquisitorBase {
  constructor(game) {
    super(game, "Zealous Inquisitor", "Scourge", "SCG");
  }
}

module.exports = ZealousInquisitor;
