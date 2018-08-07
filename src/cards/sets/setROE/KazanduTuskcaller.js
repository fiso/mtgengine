"use strict";
const Constants = require ("../../../Constants");
const KazanduTuskcallerBase = require("../setCMA/KazanduTuskcaller");

class KazanduTuskcaller extends KazanduTuskcallerBase {
  constructor (game) {
    super(game, "Kazandu Tuskcaller", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KazanduTuskcaller;
