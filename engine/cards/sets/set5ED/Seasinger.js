"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeasingerBase = require("../setFEM/Seasinger.js");

class Seasinger extends SeasingerBase {
  constructor(game) {
    super(game, "Seasinger", "Fifth Edition", "5ED");
  }
}

module.exports = Seasinger;
