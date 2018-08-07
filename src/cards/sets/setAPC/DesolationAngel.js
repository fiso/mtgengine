"use strict";
const Constants = require ("../../../Constants");
const DesolationAngelBase = require("../setMP2/DesolationAngel");

class DesolationAngel extends DesolationAngelBase {
  constructor (game) {
    super(game, "Desolation Angel", "Apocalypse", "APC");
  }
}

module.exports = DesolationAngel;
