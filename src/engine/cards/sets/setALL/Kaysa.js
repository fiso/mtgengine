"use strict";
const Constants = require ("../../../Constants");
const KaysaBase = require("../setME2/Kaysa");

class Kaysa extends KaysaBase {
  constructor (game) {
    super(game, "Kaysa", "Alliances", "ALL");
  }
}

module.exports = Kaysa;
