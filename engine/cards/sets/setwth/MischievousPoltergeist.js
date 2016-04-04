"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MischievousPoltergeistBase = require("../set6ED/MischievousPoltergeist.js");

class MischievousPoltergeist extends MischievousPoltergeistBase {
  constructor(game) {
    super(game, "Mischievous Poltergeist", "Weatherlight", "WTH");
  }
}

module.exports = MischievousPoltergeist;
