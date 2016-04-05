"use strict";
const Constants = require ("../../../Constants");
const MischievousPoltergeistBase = require("../set6ED/MischievousPoltergeist");

class MischievousPoltergeist extends MischievousPoltergeistBase {
  constructor(game) {
    super(game, "Mischievous Poltergeist", "Weatherlight", "WTH");
  }
}

module.exports = MischievousPoltergeist;
