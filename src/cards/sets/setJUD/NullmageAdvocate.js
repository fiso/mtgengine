"use strict";
const Constants = require ("../../../Constants");
const NullmageAdvocateBase = require("../setPCA/NullmageAdvocate");

class NullmageAdvocate extends NullmageAdvocateBase {
  constructor (game) {
    super(game, "Nullmage Advocate", "Judgment", "JUD");
  }
}

module.exports = NullmageAdvocate;
