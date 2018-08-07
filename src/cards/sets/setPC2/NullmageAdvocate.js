"use strict";
const Constants = require ("../../../Constants");
const NullmageAdvocateBase = require("../setPCA/NullmageAdvocate");

class NullmageAdvocate extends NullmageAdvocateBase {
  constructor (game) {
    super(game, "Nullmage Advocate", "Planechase 2012", "PC2");
  }
}

module.exports = NullmageAdvocate;
