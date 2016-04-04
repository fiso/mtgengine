"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SirensCallBase = require("../setCED/SirensCall.js");

class SirensCall extends SirensCallBase {
  constructor(game) {
    super(game, "Siren's Call", "Unlimited Edition", "2ED");
  }
}

module.exports = SirensCall;
