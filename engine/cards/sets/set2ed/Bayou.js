"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BayouBase = require("../setCED/Bayou.js");

class Bayou extends BayouBase {
  constructor(game) {
    super(game, "Bayou", "Unlimited Edition", "2ED");
  }
}

module.exports = Bayou;
