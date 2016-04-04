"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PersecuteBase = require("../set8ED/Persecute.js");

class Persecute extends PersecuteBase {
  constructor(game) {
    super(game, "Persecute", "Seventh Edition", "7ED");
  }
}

module.exports = Persecute;
