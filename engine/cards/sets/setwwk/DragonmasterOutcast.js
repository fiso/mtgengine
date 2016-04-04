"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonmasterOutcastBase = require("../setBFZ/DragonmasterOutcast.js");

class DragonmasterOutcast extends DragonmasterOutcastBase {
  constructor(game) {
    super(game, "Dragonmaster Outcast", "Worldwake", "WWK");
  }
}

module.exports = DragonmasterOutcast;
