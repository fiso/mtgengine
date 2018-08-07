"use strict";
const Constants = require ("../../../Constants");
const OjutaisCommandBase = require("../setDTK/OjutaisCommand");

class OjutaisCommand extends OjutaisCommandBase {
  constructor (game) {
    super(game, "Ojutai's Command", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = OjutaisCommand;
