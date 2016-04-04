"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CalloftheWildBase = require("../set6ED/CalloftheWild.js");

class CalloftheWild extends CalloftheWildBase {
  constructor(game) {
    super(game, "Call of the Wild", "Eighth Edition", "8ED");
  }
}

module.exports = CalloftheWild;
