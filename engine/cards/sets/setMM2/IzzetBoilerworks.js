"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IzzetBoilerworksBase = require("../setC13/IzzetBoilerworks.js");

class IzzetBoilerworks extends IzzetBoilerworksBase {
  constructor(game) {
    super(game, "Izzet Boilerworks", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = IzzetBoilerworks;
