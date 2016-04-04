"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DenizenoftheDeepBase = require("../setDPA/DenizenoftheDeep.js");

class DenizenoftheDeep extends DenizenoftheDeepBase {
  constructor(game) {
    super(game, "Denizen of the Deep", "Starter 1999", "S99");
  }
}

module.exports = DenizenoftheDeep;
