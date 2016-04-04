"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PersecuteBase = require("../set8ED/Persecute.js");

class Persecute extends PersecuteBase {
  constructor(game) {
    super(game, "Persecute", "Ninth Edition", "9ED");
  }
}

module.exports = Persecute;
