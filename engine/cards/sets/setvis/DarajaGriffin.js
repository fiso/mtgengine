"use strict";
const Constants = require ("../../../Constants");
const DarajaGriffinBase = require("../set6ED/DarajaGriffin");

class DarajaGriffin extends DarajaGriffinBase {
  constructor(game) {
    super(game, "Daraja Griffin", "Visions", "VIS");
  }
}

module.exports = DarajaGriffin;
