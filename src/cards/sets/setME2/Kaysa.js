"use strict";
const Constants = require ("../../../Constants");
const KaysaBase = require("../setALL/Kaysa");

class Kaysa extends KaysaBase {
  constructor (game) {
    super(game, "Kaysa", "Masters Edition II", "ME2");
  }
}

module.exports = Kaysa;
