"use strict";
const Constants = require ("../../../Constants");
const DejaVuBase = require("../setP02/DejaVu");

class DejaVu extends DejaVuBase {
  constructor (game) {
    super(game, "Déjà Vu", "Portal", "POR");
  }
}

module.exports = DejaVu;
