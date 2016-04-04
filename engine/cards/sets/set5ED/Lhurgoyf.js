"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LhurgoyfBase = require("../setBRB/Lhurgoyf.js");

class Lhurgoyf extends LhurgoyfBase {
  constructor(game) {
    super(game, "Lhurgoyf", "Fifth Edition", "5ED");
  }
}

module.exports = Lhurgoyf;
