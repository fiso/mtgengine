"use strict";
const Constants = require ("../../../Constants");
const NantukoVigilanteBase = require("../setWC03/NantukoVigilante");

class NantukoVigilante extends NantukoVigilanteBase {
  constructor (game) {
    super(game, "Nantuko Vigilante", "Legions", "LGN");
  }
}

module.exports = NantukoVigilante;
