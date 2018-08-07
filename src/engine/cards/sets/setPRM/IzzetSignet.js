"use strict";
const Constants = require ("../../../Constants");
const IzzetSignetBase = require("../setC18/IzzetSignet");

class IzzetSignet extends IzzetSignetBase {
  constructor (game) {
    super(game, "Izzet Signet", "Magic Online Promos", "PRM");
  }
}

module.exports = IzzetSignet;
