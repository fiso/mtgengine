"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WrathofGodBase = require("../setBRB/WrathofGod.js");

class WrathofGod extends WrathofGodBase {
  constructor(game) {
    super(game, "Wrath of God", "Ninth Edition", "9ED");
  }
}

module.exports = WrathofGod;
