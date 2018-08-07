"use strict";
const Constants = require ("../../../Constants");
const AddleBase = require("../setVMA/Addle");

class Addle extends AddleBase {
  constructor (game) {
    super(game, "Addle", "Invasion", "INV");
  }
}

module.exports = Addle;
