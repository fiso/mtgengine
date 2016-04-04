"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CaltropsBase = require("../set7ED/Caltrops.js");

class Caltrops extends CaltropsBase {
  constructor(game) {
    super(game, "Caltrops", "Urza's Destiny", "UDS");
  }
}

module.exports = Caltrops;
