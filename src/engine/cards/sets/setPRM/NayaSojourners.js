"use strict";
const Constants = require ("../../../Constants");
const NayaSojournersBase = require("../setPM10/NayaSojourners");

class NayaSojourners extends NayaSojournersBase {
  constructor (game) {
    super(game, "Naya Sojourners", "Magic Online Promos", "PRM");
  }
}

module.exports = NayaSojourners;
