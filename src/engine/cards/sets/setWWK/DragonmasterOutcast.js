"use strict";
const Constants = require ("../../../Constants");
const DragonmasterOutcastBase = require("../setBFZ/DragonmasterOutcast");

class DragonmasterOutcast extends DragonmasterOutcastBase {
  constructor (game) {
    super(game, "Dragonmaster Outcast", "Worldwake", "WWK");
  }
}

module.exports = DragonmasterOutcast;
