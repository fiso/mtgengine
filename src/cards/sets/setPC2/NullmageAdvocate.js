"use strict";
const Constants = require ("../../../Constants");
const NullmageAdvocateBase = require("../setJUD/NullmageAdvocate");

class NullmageAdvocate extends NullmageAdvocateBase {
  constructor (game) {
    super(game, "Nullmage Advocate", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = NullmageAdvocate;
