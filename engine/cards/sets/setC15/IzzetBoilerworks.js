"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IzzetBoilerworksBase = require("../setC13/IzzetBoilerworks.js");

class IzzetBoilerworks extends IzzetBoilerworksBase {
  constructor(game) {
    super(game, "Izzet Boilerworks", "Commander 2015", "C15");
  }
}

module.exports = IzzetBoilerworks;
