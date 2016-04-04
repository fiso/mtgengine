"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DerelorBase = require("../set6ED/Derelor.js");

class Derelor extends DerelorBase {
  constructor(game) {
    super(game, "Derelor", "Fifth Edition", "5ED");
  }
}

module.exports = Derelor;
