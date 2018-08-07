"use strict";
const Constants = require ("../../../Constants");
const AtarkasCommandBase = require("../setDTK/AtarkasCommand");

class AtarkasCommand extends AtarkasCommandBase {
  constructor (game) {
    super(game, "Atarka's Command", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = AtarkasCommand;
