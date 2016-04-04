"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ItThatBetraysBase = require("../setDDP/ItThatBetrays.js");

class ItThatBetrays extends ItThatBetraysBase {
  constructor(game) {
    super(game, "It That Betrays", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ItThatBetrays;
