"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarajaGriffinBase = require("../set6ED/DarajaGriffin.js");

class DarajaGriffin extends DarajaGriffinBase {
  constructor(game) {
    super(game, "Daraja Griffin", "Visions", "VIS");
  }
}

module.exports = DarajaGriffin;
