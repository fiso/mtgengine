"use strict";
const Constants = require ("../../../Constants");
const IzzetSignetBase = require("../setC18/IzzetSignet");

class IzzetSignet extends IzzetSignetBase {
  constructor (game) {
    super(game, "Izzet Signet", "Commander 2011", "CMD");
  }
}

module.exports = IzzetSignet;
