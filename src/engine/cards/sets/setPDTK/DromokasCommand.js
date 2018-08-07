"use strict";
const Constants = require ("../../../Constants");
const DromokasCommandBase = require("../setDTK/DromokasCommand");

class DromokasCommand extends DromokasCommandBase {
  constructor (game) {
    super(game, "Dromoka's Command", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = DromokasCommand;
