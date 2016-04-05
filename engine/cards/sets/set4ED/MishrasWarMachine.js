"use strict";
const Constants = require ("../../../Constants");
const MishrasWarMachineBase = require("../setATQ/MishrasWarMachine");

class MishrasWarMachine extends MishrasWarMachineBase {
  constructor(game) {
    super(game, "Mishra's War Machine", "Fourth Edition", "4ED");
  }
}

module.exports = MishrasWarMachine;
