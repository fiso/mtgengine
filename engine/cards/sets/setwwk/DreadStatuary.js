"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreadStatuaryBase = require("../setDDM/DreadStatuary.js");

class DreadStatuary extends DreadStatuaryBase {
  constructor(game) {
    super(game, "Dread Statuary", "Worldwake", "WWK");
  }
}

module.exports = DreadStatuary;
