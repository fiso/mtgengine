"use strict";
const Constants = require ("../../../Constants");
const SerraAdvocateBase = require("../setDVD/SerraAdvocate");

class SerraAdvocate extends SerraAdvocateBase {
  constructor (game) {
    super(game, "Serra Advocate", "Seventh Edition", "7ED");
  }
}

module.exports = SerraAdvocate;
