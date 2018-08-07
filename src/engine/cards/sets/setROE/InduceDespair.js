"use strict";
const Constants = require ("../../../Constants");
const InduceDespairBase = require("../setDDP/InduceDespair");

class InduceDespair extends InduceDespairBase {
  constructor (game) {
    super(game, "Induce Despair", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = InduceDespair;
