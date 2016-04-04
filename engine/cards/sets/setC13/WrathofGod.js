"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WrathofGodBase = require("../setBRB/WrathofGod.js");

class WrathofGod extends WrathofGodBase {
  constructor(game) {
    super(game, "Wrath of God", "Commander 2013 Edition", "C13");
  }
}

module.exports = WrathofGod;
