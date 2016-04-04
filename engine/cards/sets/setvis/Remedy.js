"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RemedyBase = require("../set6ED/Remedy.js");

class Remedy extends RemedyBase {
  constructor(game) {
    super(game, "Remedy", "Visions", "VIS");
  }
}

module.exports = Remedy;
