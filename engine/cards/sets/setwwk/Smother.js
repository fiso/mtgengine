"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmotherBase = require("../setDDP/Smother.js");

class Smother extends SmotherBase {
  constructor(game) {
    super(game, "Smother", "Worldwake", "WWK");
  }
}

module.exports = Smother;
