"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InduceDespairBase = require("../setDDP/InduceDespair.js");

class InduceDespair extends InduceDespairBase {
  constructor(game) {
    super(game, "Induce Despair", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = InduceDespair;
