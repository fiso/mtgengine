"use strict";
const Constants = require ("../../../Constants");
const KazanduTuskcallerBase = require("../setCMA/KazanduTuskcaller");

class KazanduTuskcaller extends KazanduTuskcallerBase {
  constructor (game) {
    super(game, "Kazandu Tuskcaller", "Commander 2013", "C13");
  }
}

module.exports = KazanduTuskcaller;
