"use strict";
const Constants = require ("../../../Constants");
const DenizenoftheDeepBase = require("../setDPA/DenizenoftheDeep");

class DenizenoftheDeep extends DenizenoftheDeepBase {
  constructor (game) {
    super(game, "Denizen of the Deep", "Portal Second Age", "P02");
  }
}

module.exports = DenizenoftheDeep;
