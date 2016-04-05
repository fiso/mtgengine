"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CodexShredder extends UnimplementedCard {
  constructor(game) {
    super(game, "Codex Shredder", "Return to Ravnica", "RTR");
  }
}

module.exports = CodexShredder;
