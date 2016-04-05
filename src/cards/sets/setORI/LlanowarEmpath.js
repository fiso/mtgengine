"use strict";
const Constants = require ("../../../Constants");
const LlanowarEmpathBase = require("../setFUT/LlanowarEmpath");

class LlanowarEmpath extends LlanowarEmpathBase {
  constructor(game) {
    super(game, "Llanowar Empath", "Magic Origins", "ORI");
  }
}

module.exports = LlanowarEmpath;
