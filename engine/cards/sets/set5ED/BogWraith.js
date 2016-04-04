"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BogWraithBase = require("../set6ED/BogWraith.js");

class BogWraith extends BogWraithBase {
  constructor(game) {
    super(game, "Bog Wraith", "Fifth Edition", "5ED");
  }
}

module.exports = BogWraith;
