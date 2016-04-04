"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LlanowarEmpathBase = require("../setFUT/LlanowarEmpath.js");

class LlanowarEmpath extends LlanowarEmpathBase {
  constructor(game) {
    super(game, "Llanowar Empath", "Magic Origins", "ORI");
  }
}

module.exports = LlanowarEmpath;
