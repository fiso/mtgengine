"use strict";
const Constants = require ("../../../Constants");
const MaliceBase = require("../setDDH/Malice");

class Malice extends MaliceBase {
  constructor (game) {
    super(game, "Malice", "Invasion", "INV");
  }
}

module.exports = Malice;
