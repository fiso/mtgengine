"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MishrasWarMachineBase = require("../setATQ/MishrasWarMachine.js");

class MishrasWarMachine extends MishrasWarMachineBase {
  constructor(game) {
    super(game, "Mishra's War Machine", "Fourth Edition", "4ED");
  }
}

module.exports = MishrasWarMachine;
