"use strict";
const Constants = require ("../../../Constants");
const SpurnmageAdvocateBase = require("../setCMD/SpurnmageAdvocate");

class SpurnmageAdvocate extends SpurnmageAdvocateBase {
  constructor (game) {
    super(game, "Spurnmage Advocate", "Judgment", "JUD");
  }
}

module.exports = SpurnmageAdvocate;
