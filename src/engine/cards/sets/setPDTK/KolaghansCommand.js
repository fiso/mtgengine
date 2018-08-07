"use strict";
const Constants = require ("../../../Constants");
const KolaghansCommandBase = require("../setDTK/KolaghansCommand");

class KolaghansCommand extends KolaghansCommandBase {
  constructor (game) {
    super(game, "Kolaghan's Command", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = KolaghansCommand;
