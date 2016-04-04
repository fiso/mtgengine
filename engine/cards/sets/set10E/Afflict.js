"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AfflictBase = require("../setODY/Afflict.js");

class Afflict extends AfflictBase {
  constructor(game) {
    super(game, "Afflict", "Tenth Edition", "10E");
  }
}

module.exports = Afflict;
