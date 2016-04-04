"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DistressBase = require("../setCHK/Distress.js");

class Distress extends DistressBase {
  constructor(game) {
    super(game, "Distress", "Tenth Edition", "10E");
  }
}

module.exports = Distress;
