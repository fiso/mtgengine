"use strict";
const Constants = require ("../../../Constants");
const DenizenoftheDeepBase = require("../setDPA/DenizenoftheDeep");

class DenizenoftheDeep extends DenizenoftheDeepBase {
  constructor(game) {
    super(game, "Denizen of the Deep", "Tenth Edition", "10E");
  }
}

module.exports = DenizenoftheDeep;
