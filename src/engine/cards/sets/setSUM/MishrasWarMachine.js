"use strict";
const Constants = require ("../../../Constants");
const MishrasWarMachineBase = require("../set4ED/MishrasWarMachine");

class MishrasWarMachine extends MishrasWarMachineBase {
  constructor (game) {
    super(game, "Mishra's War Machine", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = MishrasWarMachine;
