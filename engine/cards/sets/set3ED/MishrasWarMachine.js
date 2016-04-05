"use strict";
const Constants = require ("../../../Constants");
const MishrasWarMachineBase = require("../setATQ/MishrasWarMachine");

class MishrasWarMachine extends MishrasWarMachineBase {
  constructor(game) {
    super(game, "Mishra's War Machine", "Revised Edition", "3ED");
  }
}

module.exports = MishrasWarMachine;
