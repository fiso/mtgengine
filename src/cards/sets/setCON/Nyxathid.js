"use strict";
const Constants = require ("../../../Constants");
const NyxathidBase = require("../setBBD/Nyxathid");

class Nyxathid extends NyxathidBase {
  constructor (game) {
    super(game, "Nyxathid", "Conflux", "CON");
  }
}

module.exports = Nyxathid;
