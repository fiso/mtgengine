"use strict";
const Constants = require ("../../../Constants");
const DreadStatuaryBase = require("../setDDM/DreadStatuary");

class DreadStatuary extends DreadStatuaryBase {
  constructor (game) {
    super(game, "Dread Statuary", "Worldwake", "WWK");
  }
}

module.exports = DreadStatuary;
