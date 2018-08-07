"use strict";
const Constants = require ("../../../Constants");
const IzzetSignetBase = require("../setC18/IzzetSignet");

class IzzetSignet extends IzzetSignetBase {
  constructor (game) {
    super(game, "Izzet Signet", "Modern Masters 2017", "MM3");
  }
}

module.exports = IzzetSignet;
