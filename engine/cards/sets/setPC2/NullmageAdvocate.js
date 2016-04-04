"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NullmageAdvocateBase = require("../setJUD/NullmageAdvocate.js");

class NullmageAdvocate extends NullmageAdvocateBase {
  constructor(game) {
    super(game, "Nullmage Advocate", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = NullmageAdvocate;
